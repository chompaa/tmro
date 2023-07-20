import { v4 as uuidv4 } from "uuid";
import { useState } from "preact/hooks";
import {
  DragDropContext,
  DraggableLocation,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import { Bar, ListForm, Column } from "./components";
import { ListItem, CardItem, DragType, TodoItem } from "./types";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from "./hooks/useAuth";
import { usePlaceholder } from "./hooks/usePlaceholder";
import { getDestinationDom, getDraggedDom } from "./util";

export function App() {
  const { user, signIn, signOut } = useAuth({
    onSignInExists: (lists: any) => setLists(lists),
    onSignInNotExists: () => updateLists([]),
    onSignOut: () => setLists([]),
  });

  const [lists, setLists] = useState<ListItem[]>([]);

  const { placeholder, onDragStart, onDragEnd, onDragUpdate } =
    usePlaceholder();

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
    updateLists([...lists, { title, cards: [] }]);
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

  const changeColor = (listIndex: number, cardIndex: number, color: string) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].cards[cardIndex].color = color;
    updateLists(updatedLists);
  };

  const changeTodos = (
    listIndex: number,
    cardIndex: number,
    todos: TodoItem[]
  ) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].cards[cardIndex].todos = todos;
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

  const handleDragEnd = (result: DropResult) => {
    onDragEnd();

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
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    const childrenArray = [...draggedDOM.parentElement.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const droppedDom = getDestinationDom(event.destination.droppableId);
    const destinationChildrenArray = [...droppedDom!.children];

    let updatedArray;

    // are we dragging within the same list?
    if (draggedDOM.parentElement === droppedDom) {
      updatedArray = [
        ...childrenArray.slice(0, destinationIndex),
        movedItem,
        ...childrenArray.slice(destinationIndex + 1),
      ];
    } else {
      updatedArray = [
        ...destinationChildrenArray.slice(0, destinationIndex),
        movedItem,
        ...destinationChildrenArray.slice(destinationIndex + 1),
      ];
    }

    onDragUpdate(event, updatedArray);
  };

  return (
    <div>
      <Bar
        signIn={signIn}
        signOut={signOut}
        user={user}
        updateLists={updateLists}
      ></Bar>
      <div class="mx-4 flex select-none items-start text-slate-950">
        <DragDropContext
          onDragStart={onDragStart}
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
                    changeTodos={(cardIndex: number, todos: TodoItem[]) =>
                      changeTodos(index, cardIndex, todos)
                    }
                    changeColor={(cardIndex: number, color: string) =>
                      changeColor(index, cardIndex, color)
                    }
                    removeList={() => removeList(index)}
                    placeholder={placeholder}
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
