import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { DragType, ListItem, TodoItem } from "../types";
import { Heading, List, CardForm } from ".";

export const Column = ({
  list,
  index,
  changeTitle,
  changeContent,
  changeDescription,
  addCard,
  removeCard,
  changeTodos,
  removeList,
  placeholderProps,
}: {
  list: ListItem;
  index: number;
  changeTitle: (title: string) => void;
  changeContent: (cardIndex: number, content: string) => void;
  changeDescription: (cardIndex: number, description: string) => void;
  addCard: (content: string) => void;
  removeCard: (cardIndex: number) => void;
  changeTodos: (cardIndex: number, todos: TodoItem[]) => void;
  removeList: () => void;
  placeholderProps: {
    clientX?: number;
    clientY?: number;
    clientWidth?: number;
    clientHeight?: number;
  };
}) => {
  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          class="mx-4 my-8 h-full rounded-xl shadow-sm shadow-black"
        >
          <div class="w-72 rounded-xl bg-slate-200">
            <div {...provided.dragHandleProps} class="rounded-t-xl">
              <Heading
                title={list.title}
                changeTitle={changeTitle}
                removeList={removeList}
                snapshot={snapshot}
              ></Heading>
            </div>
            <Droppable droppableId={`${index}`} type={DragType.Card}>
              {(
                provided: DroppableProvided,
                snapshot: DroppableStateSnapshot
              ) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  class="relative px-2"
                >
                  <List
                    title={list.title}
                    cards={list.cards}
                    changeContent={changeContent}
                    changeDescription={changeDescription}
                    removeCard={removeCard}
                    changeTodos={changeTodos}
                  ></List>
                  {provided.placeholder}
                  {snapshot.isDraggingOver && (
                    <div
                      class="absolute rounded-md bg-slate-300"
                      style={{
                        top: placeholderProps.clientY,
                        left: placeholderProps.clientX,
                        height: placeholderProps.clientHeight,
                        width: placeholderProps.clientWidth,
                      }}
                    ></div>
                  )}
                </div>
              )}
            </Droppable>
            <CardForm addCard={addCard}></CardForm>
          </div>
        </div>
      )}
    </Draggable>
  );
};
