import { useState, useRef, TargetedEvent } from "preact/compat";

export const Heading = ({
  title,
  changeTitle,
  index,
}: {
  title: string;
  changeTitle: (index: number, title: string) => void;
  index: number;
}) => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>(title);

  const handleHeadingChange = (
    e: TargetedEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const target = e.target as HTMLTextAreaElement;
    const title = target.value;

    if (title) {
      changeTitle(index, title);
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
    setActive(false);
  };

  return (
    <div class="relative p-2 pb-0">
      <div
        class={`absolute left-0 top-0 h-full w-full ${
          active ? "hidden" : "cursor-pointer"
        }`}
        onClick={() => {
          setActive(true);
          textArea.current?.focus();
        }}
      ></div>
      <textarea
        ref={textArea}
        spellcheck={false}
        dir="auto"
        maxLength={15}
        onBlurCapture={() => {
          setActive(false);
        }}
        onKeyDown={handleHeadingKeyDown}
        onBlur={(e) => handleHeadingChange(e, index)}
        defaultValue={title}
        class="box-border h-9 w-full cursor-pointer resize-none overflow-hidden break-words rounded 
                  border-2 border-slate-200 bg-inherit px-3 py-1 font-semibold focus:cursor-text 
                focus:border-slate-900 focus:bg-slate-50 focus:outline-none"
      ></textarea>
    </div>
  );
};
