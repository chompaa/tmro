import { TargetedEvent } from "preact/compat";

export const Heading = ({
  title,
  changeTitle,
  index,
}: {
  title: string;
  changeTitle: (index: number, title: string) => void;
  index: number;
}) => {
  const handleHeadingChange = (
    e: TargetedEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const target = e.target as HTMLTextAreaElement;

    if (target.value) {
      changeTitle(index, target.value);
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
        onChange={(e) => handleHeadingChange(e, index)}
        onKeyDown={handleHeadingKeyDown}
        defaultValue={title}
        class="overflow-hidden break-words px-3 py-1 bg-inherit resize-none w-full h-9 font-semibold
                 box-border border-2 border-slate-100 rounded-md cursor-pointer focus:bg-white 
                 focus:outline-none focus:border-blue-500 focus:cursor-text"
      ></textarea>
    </div>
  );
};
