import { IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-preact";

export const Bar = () => {
  return (
    <div
      class="w-full font-bold text-3xl text-slate-50 p-6 border-b-slate-800 border-b-2
                flex items-center"
    >
      <div class="flex items-end gap-4">
        <div class="relative -bottom-1">trello clone</div>
        <div class="relative flex items-end w-fit h-fit">
          <IconBrandGithub class="absolute"></IconBrandGithub>
          <a
            class="absolute flex items-center content-center justify-center opacity-0 
          fill-slate-200 hover:opacity-100 transition cursor-pointer"
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
