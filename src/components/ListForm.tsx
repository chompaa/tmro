import { IconPlus } from "@tabler/icons-preact";

export const ListForm = ({ addList }: { addList: (title: string) => void }) => {
  return (
    <button
      class="mx-4 my-8 flex items-center gap-2 rounded-md bg-slate-700 p-3 px-2 py-1 
           text-slate-50 hover:bg-slate-600 whitespace-nowrap"
      onClick={() => addList("New list")}
    >
      <IconPlus size={18}></IconPlus>
      Add another list
    </button>
  );
};
