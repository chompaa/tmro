import { IconPlus } from "@tabler/icons-preact";

export const ListForm = ({ addList }: { addList: (title: string) => void }) => {
  return (
    <button
      class="my-8 mx-4 px-2 py-1 bg-slate-700 text-slate-50 p-3 rounded-md flex gap-2 
                       items-center hover:bg-slate-600"
      onClick={() => addList("New list")}
    >
      <IconPlus size={18}></IconPlus>
      Add another list
    </button>
  );
};
