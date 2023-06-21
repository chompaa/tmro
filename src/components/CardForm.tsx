import { useState, useRef } from "preact/hooks";
import { IconPlus, IconX } from "@tabler/icons-preact";

export const CardForm = ({
  addCard,
  index,
}: {
  addCard: (index: number, content: string) => void;
  index: number;
}) => {
  const [active, setActive] = useState<boolean>(false);
  const textArea = useRef<HTMLTextAreaElement>(null);

  const handleAddCard = () => {
    const content = textArea.current;

    if (!content || !content.value) {
      return;
    }

    addCard(index, content.value);
    content.value = "";
    content.focus();
  };

  return active ? (
    <div class="flex w-full flex-col gap-2 p-2 pt-0">
      <div
        class="flex h-10 resize-none content-center rounded-md bg-slate-50 px-3 py-2 
               shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 focus:outline-none"
      >
        <textarea
          ref={textArea}
          name={"cardTitle"}
          spellCheck={false}
          maxLength={15}
          placeholder={"Enter a title for this card..."}
          type={"text"}
          class="h-full w-full resize-none bg-inherit outline-none"
        ></textarea>
      </div>
      <div class="flex gap-2">
        <button
          class="w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950"
          type="submit"
          onClick={() => handleAddCard()}
        >
          Add card
        </button>
        <button
          class="rounded-md px-1 hover:bg-slate-300"
          onClick={() => setActive(false)}
        >
          <IconX></IconX>
        </button>
      </div>
    </div>
  ) : (
    <div class="p-2 pt-0">
      <button
        onClick={() => setActive(true)}
        class="flex w-full items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-slate-300"
      >
        <IconPlus size={18}></IconPlus>
        Add a card
      </button>
    </div>
  );
};
