import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "preact/hooks";
import {
  DragDropContext,
  DraggableLocation,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import { Bar, ListForm, Column } from "./components";
import { ListItem, CardItem, DragType } from "./types";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { defaultData } from "./data";

export function App() {
  const queryAttr = "data-rbd-drag-handle-draggable-id";

  const firebaseConfig = {
    apiKey: "AIzaSyDCI-G8rde1guG1vIVhBzb9p1e8jzSP3a4",
    authDomain: "trello-clone-b3c76.firebaseapp.com",
    databaseURL:
      "https://trello-clone-b3c76-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "trello-clone-b3c76",
    storageBucket: "trello-clone-b3c76.appspot.com",
    messagingSenderId: "712863136216",
    appId: "1:712863136216:web:00020f5948777f3f415aad",
  };

  initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState<string | undefined>(undefined);

  const [lists, setLists] = useState<ListItem[]>([]);

  const [placeholderProps, setPlaceholderProps] = useState<{
    clientX?: number;
    clientY?: number;
    clientWidth?: number;
    clientHeight?: number;
  }>({});

  const updateLists = (updatedLists: ListItem[]) => {
    setLists(updatedLists);

    if (!user) {
      return;
    }

    const db = getDatabase();

    set(ref(db, `users/${user}`), {
      lists: updatedLists,
    });
  };

  const reorder = (
    items: (CardItem | ListItem)[],
    startIndex: number,
    endIndex: number
  ): (CardItem | ListItem)[] => {
    const [removed] = items.splice(startIndex, 1);

    items.splice(endIndex, 0, removed);

    return items;
  };

  const move = (
    source: CardItem[],
    destination: CardItem[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ) => {
    const sourceClone = Array.from(source);
    const destinationClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destinationClone.splice(droppableDestination.index, 0, removed);

    const result: { [id: string]: CardItem[] } = {};

    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destinationClone;

    return result;
  };

  const addList = (title: string) => {
    const updatedLists = [...lists];
    updatedLists.push({ title, cards: [] });
    updateLists(updatedLists);
  };

  const removeList = (index: number) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    updateLists(updatedLists);
  };

  const addCard = (index: number, content: string) => {
    const updatedLists = [...lists];

    // empty card lists don't get stored in the database
    if (!updatedLists[index].cards) {
      updatedLists[index].cards = [];
    }

    updatedLists[index].cards.push({ id: uuidv4(), content });
    updateLists(updatedLists);
  };

  const removeCard = (listIndex: number, cardIndex: number) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].cards.splice(cardIndex, 1);
    updateLists(updatedLists);
  };

  const changeDescription = (
    listIndex: number,
    cardIndex: number,
    description: string
  ) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].cards[cardIndex].description = description;
    updateLists(updatedLists);
  };

  const changeContent = (
    listIndex: number,
    cardIndex: number,
    content: string
  ) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].cards[cardIndex].content = content;
    updateLists(updatedLists);
  };

  const changeTitle = (index: number, title: string) => {
    const updatedLists = [...lists];
    updatedLists[index].title = title;
    updateLists(updatedLists);
  };

  const handleDragStart = (event: any) => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const sourceIndex = event.source.index;
    const parent = draggedDOM.parentElement;
    const parentStyle = window.getComputedStyle(parent as Element);

    if (!parent) {
      return;
    }

    const clientY =
      parseFloat(parentStyle.paddingTop) +
      [...parent.children].slice(0, sourceIndex).reduce((total, curr) => {
        const marginBottom = parseFloat(
          window.getComputedStyle(curr).marginBottom
        );
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientX: parseFloat(parentStyle.paddingLeft),
      clientY,
      clientWidth,
      clientHeight,
    });
  };

  const handleDragEnd = (result: DropResult) => {
    setPlaceholderProps({});

    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    const sourceId: number = parseInt(source.droppableId);
    const destinationId: number = parseInt(destination.droppableId);

    const updatedLists = [...lists];

    switch (type) {
      case DragType.List:
        reorder(updatedLists, source.index, destination.index);
        break;
      case DragType.Card:
        if (sourceId === destinationId) {
          reorder(
            updatedLists[sourceId].cards,
            source.index,
            destination.index
          );
          break;
        } else {
          const result = move(
            lists[sourceId].cards,
            lists[destinationId].cards,
            source,
            destination
          );

          updatedLists[sourceId].cards = result[sourceId];
          updatedLists[destinationId].cards = result[destinationId];
        }
    }

    updateLists(updatedLists);
  };

  const handleDragUpdate = (event: any) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM || !draggedDOM.parentElement) {
      return;
    }

    const parent = draggedDOM.parentElement;

    if (!parent) {
      return;
    }

    const parentStyle = window.getComputedStyle(parent as Element);

    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    const childrenArray = [...draggedDOM.parentElement.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const updatedArray = [
      ...childrenArray.slice(0, destinationIndex),
      movedItem,
      ...childrenArray.slice(destinationIndex + 1),
    ];

    const clientY =
      parseFloat(parentStyle.paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const marginBottom = parseFloat(
          window.getComputedStyle(curr).marginBottom
        );
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientX: parseFloat(parentStyle.paddingLeft),
      clientY,
      clientWidth,
      clientHeight,
    });
  };

  const getDraggedDom = (draggableId: string) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    return document.querySelector(domQuery);
  };

  const signInUser = () => {
    const auth = getAuth();

    signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      setLists([]);
      setUser(undefined);
    });
  };

  useEffect(() => {
    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }

      setUser(user.uid);

      const db = getDatabase();

      get(child(ref(db), `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setLists(snapshot.val().lists);
        } else {
          updateLists(defaultData);
        }
      });
    });
  }, []);

  return (
    <div>
      <Bar signIn={signInUser} signOut={signOutUser} user={user}></Bar>
      <div class="mx-4 flex select-none items-start text-slate-950">
        <DragDropContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragUpdate={handleDragUpdate}
        >
          <Droppable
            droppableId="all-lists"
            direction="horizontal"
            type={DragType.List}
          >
            {(provided: DroppableProvided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                class="flex"
              >
                {lists?.map((list: ListItem, index) => (
                  <Column
                    list={list}
                    index={index}
                    changeTitle={(title: string) => changeTitle(index, title)}
                    changeContent={(cardIndex: number, content: string) =>
                      changeContent(index, cardIndex, content)
                    }
                    changeDescription={(
                      cardIndex: number,
                      description: string
                    ) => changeDescription(index, cardIndex, description)}
                    addCard={(content: string) => addCard(index, content)}
                    removeCard={(cardIndex: number) =>
                      removeCard(index, cardIndex)
                    }
                    removeList={() => removeList(index)}
                    placeholderProps={placeholderProps}
                  ></Column>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <ListForm addList={addList}></ListForm>
      </div>
    </div>
  );
}
