import {
  Draggable,
  DraggableStateSnapshot,
  DraggableProvided,
} from "react-beautiful-dnd";
import { DragAnimation } from ".";
import { useState, CSSProperties, useEffect, useRef } from "preact/compat";
import {
  IconAlignJustified,
  IconCheckbox,
  IconEdit,
} from "@tabler/icons-preact";
import { IconButton } from ".";
import CardDialog from "./CardDialog";
import { CardState, TodoItem } from "../types";
import CardEdit from "./CardEdit";
import TextArea from "./TextArea";

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

  const { normal, editing, dialog } = CardState;
  const [cardState, setCardState] = useState<CardState>(CardState.normal);

  const textArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (cardState === editing && textArea.current) {
      textArea.current.focus();
      textArea.current.selectionStart = textArea.current.value.length;
    }
  }, [cardState]);

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
                style={{ ...style, zIndex: cardState === editing ? 10 : 0 }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setCardState(editing)}
                class={`min-h-10 relative mb-2 flex flex-col break-all
                      rounded-md px-3 py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 
                      ${snapshot.isDragging ? "bg-slate-100 " : "bg-slate-50"}`}
              >
                <TextArea
                  ref={textArea}
                  active={cardState === editing}
                  placeholder="Enter a title for this card..."
                  minRows={1}
                  maxRows={5}
                  maxLength={120}
                >
                  {content}
                </TextArea>
                {hover && cardState === normal && (
                  <div class="absolute right-0 top-0 m-[0.1875rem] rounded bg-slate-200">
                    <IconButton
                      clickHandler={() => setCardState(dialog)}
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
      {cardState === editing && (
        <CardEdit
          close={() => setCardState(normal)}
          changeContent={() =>
            changeContent(textArea.current?.value || content)
          }
        />
      )}
      {cardState === dialog && (
        <CardDialog
          setActive={(state: CardState) => setCardState(state)}
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
