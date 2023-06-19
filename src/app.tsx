import { v4 as uuidv4 } from "uuid";
import { useState } from "preact/hooks";
import {
  DragDropContext,
  Droppable,
  DroppableProvider,
  DropResult,
} from "react-beautiful-dnd";
import { Heading, List, CardForm } from "./components";
import { ListItem, CardItem } from "./types";

export function App() {
  const [lists, setLists] = useState<ListItem[]>([
    {
      title: "lol",
      cards: [
        {
          id: uuidv4(),
          content: "w",
        },
        {
          id: uuidv4(),
          content: "x",
        },
        {
          id: uuidv4(),
          content: "y",
        },
        {
          id: uuidv4(),
          content: "z",
        },
      ],
    },
    {
      title: "haha",
      cards: [
        {
          id: uuidv4(),
          content: "a",
        },
        {
          id: uuidv4(),
          content: "b",
        },
        {
          id: uuidv4(),
          content: "c",
        },
      ],
    },
  ]);

  const reorder = (list: CardItem[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (
    source: CardItem[],
    destination: CardItem[],
    droppableSource: DropResult,
    droppableDestination: DropResult
  ) => {
    const sourceClone = Array.from(source);
    const destinationClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destinationClone.splice(droppableDestination.index, 0, removed);

    const result: { [id: string]: DropResult } = {};

    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destinationClone;

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;

    const updatedCards = [...lists];

    if (sourceId === destinationId) {
      const items = reorder(
        lists[sourceId].cards,
        source.index,
        destination.index
      );

      updatedCards[sourceId].cards = items;
    } else {
      const result = move(
        lists[sourceId].cards,
        lists[destinationId].cards,
        source,
        destination
      );

      updatedCards[sourceId].cards = result[sourceId];
      updatedCards[destinationId].cards = result[destinationId];
    }

    setLists(updatedCards);
  };

  const addCard = (index: number, content: string) => {
    const updatedLists = [...lists];
    updatedLists[index].cards.push({ id: uuidv4(), content: content });
    setLists(updatedLists);
  };

  const changeTitle = (index: number, title: string) => {
    const updatedLists = [...lists];
    updatedLists[index].title = title;
    setLists(updatedLists);
  };

  return (
    <div class="flex gap-2">
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map((list: ListItem, index) => (
          <div class="h-full">
            <div class="bg-slate-100 rounded-xl p-3 w-72">
              <Heading
                title={list.title}
                changeTitle={changeTitle}
                index={index}
              ></Heading>
              <Droppable key={index} droppableId={`${index}`}>
                {(provided: DroppableProvider) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <List cards={list.cards}></List>
                    <div class="mb-2">{provided.placeholder}</div>
                  </div>
                )}
              </Droppable>
              <CardForm addCard={addCard} index={index}></CardForm>
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}
