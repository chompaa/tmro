import { cloneElement } from "preact";
import { TargetedEvent } from "preact/compat";

export const IconButton = ({
  clickHandler,
  icon,
  disabled,
}: {
  clickHandler: () => void;
  icon: JSX.Element;
  disabled?: boolean;
}) => {
  return (
    <>
      {!disabled && (
        <button
          onClick={(e: TargetedEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            clickHandler();
          }}
          class="flex content-center items-center justify-center rounded p-2 text-slate-500 
           hover:bg-slate-300"
        >
          {cloneElement(icon, { size: 18 })}
        </button>
      )}
    </>
  );
};
