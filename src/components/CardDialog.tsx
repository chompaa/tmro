import {
  IconAlignJustified,
  IconCheckbox,
  IconLayoutCards,
  IconX,
} from "@tabler/icons-preact";
import TextArea from "./TextArea";
import { useEffect, useRef } from "preact/hooks";

const CardDialog = ({
  active,
  setActive,
  listTitle,
  content,
}: {
  active: boolean;
  setActive: (active: boolean) => void;
  listTitle: string;
  content: string;
}) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleClose = () => {
    setActive(false);
  };

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    contentRef.current.value = content;
  }, [active, content]);

  return (
    <div class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900/75">
      <div class="m-2 flex w-full flex-col gap-4 rounded-xl bg-slate-200 px-6 py-4 lg:w-1/3">
        <div>
          <div class="flex items-center gap-2 p-2">
            <IconLayoutCards class="text-slate-500"></IconLayoutCards>
            <h1 class="h-fit w-full px-3 py-1 font-semibold">Title</h1>
            <div
              class="-m-2 cursor-pointer rounded bg-slate-300 p-1 text-slate-500 hover:text-slate-900"
              onClick={() => handleClose()}
            >
              <IconX></IconX>
            </div>
          </div>
          <div class="ml-[3.25rem]">
            <TextArea
              ref={contentRef}
              styles="focus:border-slate-900 focus:bg-slate-50 bg-slate-100 border-slate-300 rounded border-2 font-semibold 
                      px-3 py-1 text-slate-950"
              minRows={1}
              maxRows={4}
              maxLength={100}
            >
              {content}
            </TextArea>
          </div>
          <div class="mx-[3.25rem] mt-1 text-slate-500">
            In list
            <strong class="font-semibold"> {listTitle}</strong>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2 p-2">
            <IconAlignJustified class="text-slate-500"></IconAlignJustified>
            <h1 class="h-fit px-3 py-1 font-semibold">Description</h1>
          </div>
          <div class="ml-[3.25rem] mr-2">
            <TextArea
              ref={descriptionRef}
              placeholder="Add a more detailed description..."
              styles="focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2
                      px-3 py-1 text-slate-950 border-slate-300"
              minRows={2}
              maxRows={4}
              maxLength={100}
            >
              {content}
            </TextArea>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2 p-2 pb-0">
            <IconCheckbox class="text-slate-500"></IconCheckbox>
            <h1 class="h-fit px-3 py-1 font-semibold">Checklist</h1>
          </div>
          <div class="flex items-center gap-2 px-2 pb-2">
            <div class="absolute">
              <div class="-ml-2 w-10 text-center">100%</div>
            </div>
            <div class="my-2 ml-[2.75rem] h-2 w-full rounded bg-slate-300"></div>
          </div>
          <button class="mb-2 ml-[3.25rem] rounded-md bg-slate-900 px-2 py-1 text-slate-50 hover:bg-slate-950">
            Add an item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDialog;
