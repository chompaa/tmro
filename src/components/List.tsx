import { useState, useRef } from "preact/hooks";
import { TargetedEvent } from "preact/compat";

const List = () => {
  const [heading, setHeading] = useState<string>("List");
  const headingTextArea = useRef<HTMLTextAreaElement>(null);

  const handleHeadingChange = (e: TargetedEvent<HTMLTextAreaElement>) => {
    if (!headingTextArea.current) {
      return;
    }

    const target = e.target as HTMLTextAreaElement;
    const value: string = target.value;

    if (value) {
      setHeading(value);
    } else {
      headingTextArea.current.value = heading;
    }
  };

  const handleHeadingKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    e.preventDefault();
    headingTextArea.current?.blur();
  };

  return (
    <div class="bg-slate-100 rounded-xl p-4 w-fit">
      <div class="relative flex flex-grow-0 flex-show-0 flex-basis-auto">
        <textarea
          ref={headingTextArea}
          spellcheck={false}
          dir="auto"
          maxLength={15}
          onChange={handleHeadingChange}
          onKeyDown={handleHeadingKeyDown}
          defaultValue={heading}
          class="overflow-hidden break-words px-3 py-1 bg-inherit resize-none h-9 font-semibold
                 box-border border-2 border-slate-100 rounded-md cursor-pointer focus:bg-white 
                 focus:outline-none focus:border-blue-500 focus:cursor-text"
        ></textarea>
      </div>
    </div>
  );
};

export default List;
