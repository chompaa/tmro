import { TargetedEvent } from "preact/compat";
import { useState } from "preact/compat";

export const Heading = ({
  title,
  changeTitle,
  index,
}: {
  title: string;
  changeTitle: (index: number, title: string) => void;
  index: number;
}) => {
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
  };

  return (
    <div class="w-full">
      <textarea
        spellcheck={false}
        dir="auto"
        maxLength={15}
        onKeyDown={handleHeadingKeyDown}
        onBlur={(e) => handleHeadingChange(e, index)}
        defaultValue={title}
        class="overflow-hidden break-words px-3 py-1 bg-inherit resize-none w-full h-9 font-semibold
                 box-border border-2 border-slate-200 rounded cursor-pointer focus:bg-slate-50
                 focus:outline-none focus:border-slate-900 focus:cursor-text"
      ></textarea>
    </div>
  );
};
