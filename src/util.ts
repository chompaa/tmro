const queryAttr = "data-rbd-drag-handle-draggable-id";
const destinationQuertAttr = "data-rbd-droppable-id";

export const getDraggedDom = (draggableId: string) => {
  const domQuery = `[${queryAttr}='${draggableId}']`;
  return document.querySelector<HTMLElement>(domQuery);
};

export const getDestinationDom = (dropabbleId: string) => {
  const domQuery = `[${destinationQuertAttr}='${dropabbleId}']`;
  return document.querySelector<HTMLElement>(domQuery);
};
