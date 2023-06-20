import { IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-preact";

export const Bar = () => {
  return (
    <div
      class="flex w-full items-center border-b-2 border-b-slate-800 p-6 text-3xl font-bold 
           text-slate-50"
    >
      <div class="flex items-end gap-4">
        <div class="relative -bottom-1">trello clone</div>
        <div class="relative flex h-fit w-fit items-end">
          <IconBrandGithub class="absolute"></IconBrandGithub>
          <a
            class="absolute flex cursor-pointer content-center items-center justify-center 
                 fill-slate-200 opacity-0 transition hover:opacity-100"
            href="https://github.com/chompaa/trello-clone"
            target="_blank"
          >
            <IconBrandGithubFilled></IconBrandGithubFilled>
          </a>
        </div>
      </div>
    </div>
  );
};
