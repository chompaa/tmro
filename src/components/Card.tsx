import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

export const Card = ({
  id,
  index,
  content,
}: {
  id: string;
  index: number;
  content: string;
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          class={`rounded-md focus:outline-none resize-none px-3 py-2 mb-2 h-10 
                      shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-gray-300 flex
                      content-center ${
                        snapshot.isDragging ? "bg-slate-200" : "bg-slate-50"
                      }`}
        >
          {content}
        </div>
      )}
    </Draggable>
  );
};
