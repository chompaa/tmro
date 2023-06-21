import {
  Draggable,
  DraggableStateSnapshot,
  DraggableProvided,
} from "react-beautiful-dnd";
import { DragAnimation } from ".";
import { useState, CSSProperties } from "preact/compat";
import { IconTrash } from "@tabler/icons-preact";

export const Card = ({
  id,
  listIndex,
  index,
  content,
  removeCard,
}: {
  id: string;
  listIndex: number;
  index: number;
  content: string;
  removeCard: (listIndex: number, cardIndex: number) => void;
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
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
              class={`mb-2 flex h-10 resize-none content-center items-center rounded-md px-3 
                      py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 
                      ${snapshot.isDragging ? "bg-slate-100 " : "bg-slate-50"}`}
            >
              {content}
              {hover && (
                <button
                  onClick={() => removeCard(listIndex, index)}
                  class="absolute left-auto right-1 flex content-center items-center justify-center 
                         rounded p-2 text-slate-400 hover:bg-slate-200"
                >
                  <IconTrash size={16}></IconTrash>
                </button>
              )}
            </div>
          )}
        </DragAnimation>
      )}
    </Draggable>
  );
};
