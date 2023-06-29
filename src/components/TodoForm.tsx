import { useEffect, useRef } from "preact/hooks";
import TextArea from "./TextArea";
import { IconX } from "@tabler/icons-preact";

const TodoForm = ({
  setActive,
  addTodo,
}: {
  setActive: (active: boolean) => void;
  addTodo: (content: string) => void;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleAddTodo = () => {
    const content = textAreaRef.current?.value;

    if (!content) {
      return;
    }

    addTodo(content);
    textAreaRef.current.value = "";
    textAreaRef.current.rows = 1;
    textAreaRef.current.focus();
  };

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  return (
    <div class="flex flex-col gap-2">
      <TextArea
        ref={textAreaRef}
        styles="focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2
              px-3 py-1 text-slate-950 border-slate-300"
        placeholder="Enter a description for this item..."
        minRows={1}
        maxRows={2}
        maxLength={30}
      ></TextArea>
      <div class="flex gap-2">
        <button
          class="w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950"
          type="submit"
          onClick={() => handleAddTodo()}
        >
          Add item
        </button>
        <button
          class="rounded-md px-1 hover:bg-slate-300"
          onClick={() => setActive(false)}
        >
          <IconX></IconX>
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
