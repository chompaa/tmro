import { useState } from "preact/hooks";
import { getDraggedDom } from "../util";

export const usePlaceholder = () => {
  const [placeholder, setPlaceholder] = useState<{
    clientX?: number;
    clientY?: number;
    clientWidth?: number;
    offsetHeight?: number;
  }>({});

  const getClientY = (
    style: CSSStyleDeclaration,
    children: Element[],
    sourceIndex: number
  ) => {
    return (
      parseFloat(style.paddingTop) +
      children.slice(0, sourceIndex).reduce((total, curr) => {
        const currStyle = window.getComputedStyle(curr);
        const marginBottom = parseFloat(currStyle.marginBottom);
        const borderWidth = parseFloat(currStyle.borderTopWidth);

        return total + curr.clientHeight + marginBottom + borderWidth;
      }, 0)
    );
  };

  const onDragStart = (event: any) => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { offsetHeight, clientWidth } = draggedDOM;
    const sourceIndex = event.source.index;
    const parent = draggedDOM.parentElement;
    const parentStyle = window.getComputedStyle(parent as Element);

    if (!parent) {
      return;
    }

    setPlaceholder({
      clientX: parseFloat(parentStyle.paddingLeft),
      clientY: getClientY(parentStyle, [...parent.children], sourceIndex),
      clientWidth,
      offsetHeight,
    });
  };

  const onDragUpdate = (event: any, children: Element[]) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM || !draggedDOM.parentElement) {
      return;
    }

    const parent = draggedDOM.parentElement;

    if (!parent) {
      return;
    }

    const parentStyle = window.getComputedStyle(parent as Element);

    const { offsetHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index;

    setPlaceholder({
      clientX: parseFloat(parentStyle.paddingLeft),
      clientY: getClientY(parentStyle, children, destinationIndex),
      clientWidth,
      offsetHeight,
    });
  };

  const onDragEnd = () => {
    setPlaceholder({});
  };

  return { placeholder, onDragStart, onDragUpdate, onDragEnd };
};
