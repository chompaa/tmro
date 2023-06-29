import { useState, useRef, TargetedEvent, useEffect } from "preact/compat";

import { IconDots, IconTrash } from "@tabler/icons-preact";
import { IconButton } from ".";
import { DraggableStateSnapshot } from "react-beautiful-dnd";

export const Heading = ({
  title,
  changeTitle,
  removeList,
  snapshot,
}: {
  title: string;
  changeTitle: (title: string) => void;
  removeList: () => void;
  snapshot: DraggableStateSnapshot;
}) => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const [textAreaActive, setTextAreaActive] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>(title);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const handleHeadingChange = (e: TargetedEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    const title = target.value;

    if (title) {
      changeTitle(title);
      setHeading(title);
    } else {
      target.value = heading;
    }
  };

  const handleHeadingKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    e.preventDefault();

    const target = e.target as HTMLTextAreaElement;

    target.blur();
    setTextAreaActive(false);
  };

  useEffect(() => {
    if (!snapshot.isDragging && !textAreaActive) {
      return;
    }

    setMenuActive(false);
  }, [snapshot, textAreaActive]);

  return (
    <div class="relative flex items-center p-2">
      <div
        class={`absolute left-0 top-0 h-full w-full ${
          textAreaActive ? "hidden" : "cursor-pointer"
        }`}
        onClick={() => {
          setTextAreaActive(true);
          textArea.current?.focus();
        }}
      ></div>
      <textarea
        ref={textArea}
        spellcheck={false}
        dir="auto"
        maxLength={15}
        onBlurCapture={() => {
          setTextAreaActive(false);
        }}
        onKeyDown={handleHeadingKeyDown}
        onBlur={handleHeadingChange}
        defaultValue={title}
        class="box-border h-9 w-full cursor-pointer resize-none overflow-hidden break-words rounded 
                  border-2 border-slate-200 bg-inherit px-3 py-1 font-semibold focus:cursor-text 
                focus:border-slate-900 focus:bg-slate-50 focus:outline-none"
      ></textarea>
      <div class="absolute right-0 m-2 block">
        <IconButton
          icon={<IconDots></IconDots>}
          clickHandler={() => setMenuActive(!menuActive)}
          disabled={textAreaActive}
        ></IconButton>
        {menuActive && !textAreaActive && (
          <div
            class="absolute z-10 mt-2 grid w-64 divide-y rounded-md 
                    bg-slate-50 shadow-sm shadow-black/40"
          >
            <div class="px-4 py-3 text-center">List actions</div>
            <div class="mx-2 py-2">
              <button
                class="mx-0 flex w-full items-center gap-2 rounded-md px-2 py-1 text-left 
                     hover:bg-slate-300"
                onClick={() => removeList()}
              >
                <IconTrash size={16}></IconTrash>
                Archive this list
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
