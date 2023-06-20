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
              class={`rounded-md focus:outline-none resize-none px-3 py-2 mb-2 h-10 
                          shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 flex
                          content-center items-center ${
                            snapshot.isDragging
                              ? "bg-slate-100 "
                              : "bg-slate-50"
                          }`}
            >
              {content}
              {hover && (
                <button
                  onClick={() => removeCard(listIndex, index)}
                  class="absolute right-1 left-auto flex items-center justify-center 
                             content-center p-2 rounded text-slate-400 hover:bg-slate-200"
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
