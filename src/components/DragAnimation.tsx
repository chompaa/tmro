import { CSSProperties } from "preact/compat";
import { useState, useEffect, useRef } from "preact/hooks";
import { DraggableStateSnapshot } from "react-beautiful-dnd";
import { JSX } from "preact/compat";

export const DragAnimation = ({
  snapshot,
  style,
  children,
}: {
  snapshot: DraggableStateSnapshot;
  style: CSSProperties;
  children: (style: CSSProperties) => JSX.Element;
}) => {
  const animationId = useRef<number>(0);
  const [transform, setTransform] = useState<string>();
  const [prevX, setPrevX] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  const sigmoid = (x: number): number => x / (1 + Math.abs(x));

  const patchTransform = () => {
    if (!snapshot.isDragging || !style.transform) {
      animationId.current = requestAnimationFrame(patchTransform);
      return;
    }

    const transformStyle = style.transform as string;

    const currentX = parseInt(
      transformStyle.match(/translate\(.{1,}\)/g)![0].match(/-?[0-9]{1,}/g)![0]
    );

    const velocity = currentX - prevX;

    let newRotation = rotation * 0.9 + sigmoid(velocity) * 1.4;

    if (Math.abs(newRotation) < 0.01) {
      newRotation = 0;
    }

    setTransform(`${transformStyle} rotate(${newRotation}deg)`);
    setRotation(newRotation);
    setPrevX(currentX);
  };

  const getStyle = (snapshot: DraggableStateSnapshot) => {
    return snapshot.isDragging && !snapshot.dropAnimation
      ? { ...style, transform }
      : style;
  };

  useEffect(() => {
    animationId.current = requestAnimationFrame(patchTransform);
  }, [transform, rotation, prevX]);

  useEffect(() => {
    if (!snapshot.isDragging) {
      cancelAnimationFrame(animationId.current);
      return;
    }

    animationId.current = requestAnimationFrame(patchTransform);

    return () => {
      cancelAnimationFrame(animationId.current);
    };
  });

  return <>{children(getStyle(snapshot))}</>;
};
