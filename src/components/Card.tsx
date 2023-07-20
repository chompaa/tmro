import {
  Draggable,
  DraggableStateSnapshot,
  DraggableProvided,
} from "react-beautiful-dnd";
import { CardDialog, CardEdit, DragAnimation, TextArea } from ".";
import { useState, CSSProperties, useEffect, useRef } from "preact/compat";
import {
  IconAlignJustified,
  IconCheckbox,
  IconEdit,
} from "@tabler/icons-preact";
import { IconButton } from ".";
import { CardState, TodoItem } from "../types";

export const Card = ({
  id,
  listTitle,
  index,
  content,
  description,
  todos,
  color,
  changeContent,
  changeDescription,
  removeCard,
  changeTodos,
  changeColor,
}: {
  id: string;
  listTitle: string;
  index: number;
  content: string;
  description?: string;
  todos?: TodoItem[];
  color?: string;
  changeContent: (content: string) => void;
  changeDescription: (description: string) => void;
  removeCard: () => void;
  changeTodos: (todos: TodoItem[]) => void;
  changeColor: (color: string) => void;
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

    setHover(false);
  }, [cardState]);

  return (
    <>
      <Draggable
        draggableId={id}
        index={index}
        isDragDisabled={cardState === editing}
      >
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
                style={{
                  ...style,
                  borderColor: color,
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                class={`min-h-10 relative mb-2 flex flex-col
                      break-all rounded-md px-3 py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] 
                      shadow-slate-300 ${
                        snapshot.isDragging ? "bg-slate-100 " : "bg-slate-50"
                      } ${color && "border-t-[12px]"} ${
                  cardState === editing || snapshot.isDragging ? "z-10" : "z-0"
                }`}
              >
                <div class="relative flex">
                  <TextArea
                    ref={textArea}
                    maxLength={120}
                    disabled={cardState !== editing}
                    placeholder="Enter a title for this card..."
                  >
                    {content}
                  </TextArea>
                  <div
                    class={`visible absolute left-0 top-0 h-full w-full bg-transparent ${
                      cardState === editing && "hidden"
                    }`}
                    onClick={() => setCardState(editing)}
                  ></div>
                </div>
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
          color={color}
          changeContent={changeContent}
          changeDescription={changeDescription}
          changeTodos={changeTodos}
          changeColor={changeColor}
          removeCard={removeCard}
        />
      )}
    </>
  );
};
