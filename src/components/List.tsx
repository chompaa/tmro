import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { CardItem, DragType, ListItem, TodoItem } from "../types";
import { Heading, CardForm, Card } from ".";

export const List = ({
  list,
  index,
  changeTitle,
  changeContent,
  changeDescription,
  addCard,
  removeCard,
  changeTodos,
  changeColor,
  removeList,
  placeholder,
}: {
  list: ListItem;
  index: number;
  changeTitle: (title: string) => void;
  changeContent: (cardIndex: number, content: string) => void;
  changeDescription: (cardIndex: number, description: string) => void;
  addCard: (content: string) => void;
  removeCard: (cardIndex: number) => void;
  changeTodos: (cardIndex: number, todos: TodoItem[]) => void;
  changeColor: (cardIndex: number, color: string) => void;
  removeList: () => void;
  placeholder: {
    clientX?: number;
    clientY?: number;
    clientWidth?: number;
    offsetHeight?: number;
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
                  {list.cards?.map((card: CardItem, idx: number) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      index={idx}
                      listTitle={list.title}
                      content={card.content}
                      description={card.description}
                      todos={card.todos}
                      color={card.color}
                      changeContent={(content: string) =>
                        changeContent(idx, content)
                      }
                      changeDescription={(description: string) =>
                        changeDescription(idx, description)
                      }
                      changeTodos={(todos: TodoItem[]) =>
                        changeTodos(idx, todos)
                      }
                      changeColor={(color: string) => changeColor(idx, color)}
                      removeCard={() => removeCard(idx)}
                    ></Card>
                  ))}
                  {provided.placeholder}
                  {snapshot.isDraggingOver && (
                    <div
                      class="absolute rounded-md bg-slate-300"
                      style={{
                        top: placeholder.clientY,
                        left: placeholder.clientX,
                        width: placeholder.clientWidth,
                        height: placeholder.offsetHeight,
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
