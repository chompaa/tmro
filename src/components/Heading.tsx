import {
  useState,
  useRef,
  TargetedEvent,
  useEffect,
  createPortal,
} from "preact/compat";

import { IconDots, IconTrash } from "@tabler/icons-preact";
import { IconButton, TextArea } from ".";
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
    <div class="flex">
      <div class="relative flex w-full items-center p-2">
        <div
          class={`absolute left-0 top-0 h-full w-full ${
            textAreaActive ? "hidden" : "cursor-text"
          }`}
          onClick={() => {
            setTextAreaActive(true);
            textArea.current?.focus();
          }}
        ></div>
        <TextArea
          ref={textArea}
          styles="box-border min-h-9 w-full cursor-text resize-none overflow-hidden break-words rounded 
                  border-2 border-slate-200 bg-inherit px-3 py-1 font-semibold focus:cursor-text 
                  focus:border-slate-900 focus:bg-slate-50 focus:outline-none"
          minRows={1}
          maxRows={4}
          maxLength={70}
          onKeyDown={handleHeadingKeyDown}
          onBlur={handleHeadingChange}
          onBlurCapture={() => {
            setTextAreaActive(false);
          }}
          defaultValue={title}
        ></TextArea>
      </div>
      <div class="m-2 ml-0">
        <IconButton
          icon={<IconDots></IconDots>}
          clickHandler={() => setMenuActive(!menuActive)}
        ></IconButton>
        {menuActive && !textAreaActive && (
          <>
            {createPortal(
              <div
                class="absolute left-0 top-0 h-full w-full"
                onClick={() => setMenuActive(false)}
              />,
              document.body
            )}
            <div
              class="absolute z-10 mt-2 grid w-64 divide-y rounded-md 
                    bg-slate-50 shadow-sm shadow-black/40"
            >
              <div class="px-4 py-3 text-center">List actions</div>
              <div class="mx-2 py-2">
                <button
                  class="mx-0 flex w-full items-center gap-2 rounded-md px-2 py-1 text-left 
                     hover:bg-slate-300"
                  onClick={() => {
                    removeList();
                    setMenuActive(false);
                  }}
                >
                  <IconTrash size={16}></IconTrash>
                  Archive this list
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
