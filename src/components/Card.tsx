import {
  Draggable,
  DraggableStateSnapshot,
  DraggableProvided,
} from "react-beautiful-dnd";
import { DragAnimation } from ".";
import { useState, CSSProperties } from "preact/compat";
import {
  IconAlignJustified,
  IconCheckbox,
  IconEdit,
  IconTrash,
} from "@tabler/icons-preact";
import { IconButton } from ".";
import CardDialog from "./CardDialog";
import { TodoItem } from "../types";

export const Card = ({
  id,
  listTitle,
  index,
  content,
  description,
  todos,
  changeContent,
  changeDescription,
  removeCard,
  changeTodos,
}: {
  id: string;
  listTitle: string;
  index: number;
  content: string;
  description?: string;
  todos?: TodoItem[];
  changeContent: (content: string) => void;
  changeDescription: (description: string) => void;
  removeCard: () => void;
  changeTodos: (todos: TodoItem[]) => void;
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
          <DragAnimation
            style={provided.draggableProps.style}
            snapshot={snapshot}
          >
            {(style: CSSProperties) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={style}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setEditing(true)}
                class={`min-h-10 relative mb-2 flex flex-col break-all
                      rounded-md px-3 py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 
                      ${snapshot.isDragging ? "bg-slate-100 " : "bg-slate-50"}`}
              >
                {content}
                {hover && (
                  <div class="absolute right-0 top-0 m-[0.1875rem] rounded bg-slate-200">
                    <IconButton
                      clickHandler={() => setEditing(true)}
                      icon={<IconEdit></IconEdit>}
                    ></IconButton>
                  </div>
                )}
                <div class="mt-1 flex items-center gap-3 text-slate-500 empty:mt-0">
                  {description && (
                    <IconAlignJustified size={16}></IconAlignJustified>
                  )}
                  {todos?.length ? (
                    <div class="flex items-center gap-1">
                      <IconCheckbox size={16}></IconCheckbox>
                      <p>
                        {todos.filter((todo) => todo.completed).length}/
                        {todos.length}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </DragAnimation>
        )}
      </Draggable>
      {editing && (
        <CardDialog
          setActive={setEditing}
          listTitle={listTitle}
          content={content}
          description={description}
          todos={todos}
          changeContent={changeContent}
          changeDescription={changeDescription}
          changeTodos={changeTodos}
          removeCard={removeCard}
        />
      )}
    </>
  );
};
