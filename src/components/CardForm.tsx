import { useState, useRef } from "preact/hooks";

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
    <div class="w-full">
      <div
        class="rounded-md focus:outline-none resize-none px-3 py-2 h-10 
                      shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-gray-300 bg-slate-50 flex
                      content-center mb-2"
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
      <button
        class="bg-blue-500 w-fit px-3 py-1 text-slate-100 hover:bg-blue-600
                     rounded-md"
        type="submit"
        onClick={() => handleAddCard()}
      >
        Add card
      </button>
    </div>
  ) : (
    <button
      onClick={() => setActive(true)}
      class="w-full text-left px-3 py-1 rounded-md hover:bg-slate-200"
    >
      Add a card
    </button>
  );
};
