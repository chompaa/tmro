import {
  Draggable,
  DraggableStateSnapshot,
  DraggableProvided,
} from "react-beautiful-dnd";
import { DragAnimation } from ".";
import { useState, CSSProperties, createPortal } from "preact/compat";
import { IconTrash } from "@tabler/icons-preact";
import { IconButton } from ".";
import CardDialog from "./CardDialog";

export const Card = ({
  id,
  listTitle,
  index,
  content,
  description,
  changeContent,
  changeDescription,
  removeCard,
}: {
  id: string;
  listTitle: string;
  index: number;
  content: string;
  description?: string;
  changeContent: (content: string) => void;
  changeDescription: (description: string) => void;
  removeCard: () => void;
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
                class={`min-h-10 relative mb-2 flex resize-none content-center items-center break-all 
                      rounded-md px-3 py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 
                      ${snapshot.isDragging ? "bg-slate-100 " : "bg-slate-50"}`}
              >
                {content}
                {hover && (
                  <div class="absolute right-0 top-0 m-[0.1875rem] rounded bg-slate-200">
                    <IconButton
                      clickHandler={() => removeCard()}
                      icon={<IconTrash></IconTrash>}
                    ></IconButton>
                  </div>
                )}
              </div>
            )}
          </DragAnimation>
        )}
      </Draggable>
      {editing &&
        createPortal(
          <CardDialog
            active={editing}
            setActive={setEditing}
            listTitle={listTitle}
            content={content}
            description={description}
            changeContent={changeContent}
            changeDescription={changeDescription}
          />,
          document.body
        )}
    </>
  );
};
