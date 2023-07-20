import { IconX } from "@tabler/icons-preact";
import { createPortal } from "preact/compat";

export const CardEdit = ({
  close,
  changeContent,
}: {
  close: () => void;
  changeContent: () => void;
}) => {
  return (
    <>
      {createPortal(
        <div
          class="max-w-screen fixed left-0 top-0 z-0 flex h-dynamic max-h-dynamic w-screen 
             cursor-pointer content-center justify-center bg-slate-900/75"
          onClick={close}
        ></div>,
        document.body
      )}
      <div class="absolute flex gap-2">
        <button
          class="relative z-10 w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950"
          onClick={() => {
            changeContent();
            close();
          }}
        >
          Save
        </button>
        <button
          class="z-10 rounded-md bg-slate-200 px-1 hover:bg-slate-300 "
          onClick={close}
        >
          <IconX></IconX>
        </button>
      </div>
    </>
  );
};
