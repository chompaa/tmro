import { IconCheck, IconTrash } from "@tabler/icons-preact";
import { TargetedEvent, useState } from "preact/compat";

const Todo = ({
  completed,
  content,
  updateTodo,
  removeTodo,
}: {
  completed: boolean;
  content: string;
  updateTodo: (completed: boolean) => void;
  removeTodo: () => void;
}) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleCheckboxChange = (e: TargetedEvent<HTMLInputElement>) => {
    const checkbox = e.target as HTMLInputElement;

    updateTodo(checkbox.checked);
  };

  return (
    <div
      class="relative flex w-full items-center gap-2 rounded p-1 hover:bg-slate-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
    >
      <div class="relative m-1 h-5 w-5 shrink-0 self-start">
        <input
          class="checked:before:tick flex h-full w-full appearance-none items-center justify-center 
               rounded border-2 border-slate-300 bg-slate-100 outline-none 
               checked:border-slate-900 checked:bg-slate-900"
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        >
          <IconCheck></IconCheck>
        </input>
      </div>
      <span class={`${completed && "line-through"} max-w-full break-all`}>
        {content}
      </span>
      {hover && (
        <div
          class="absolute right-[0.3125rem] top-[0.3125rem]"
          onClick={() => removeTodo()}
        >
          <button class="rounded p-1 text-slate-500 hover:text-slate-900">
            <IconTrash size={18}></IconTrash>
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
