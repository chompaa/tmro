import { IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-preact";

export const Bar = ({
  user,
  auth,
}: {
  user: string | undefined;
  auth: () => void;
}) => {
  return (
    <div
      class="flex w-full content-center items-center border-b-2 border-b-slate-800 px-8 py-6 
           font-bold text-slate-50"
    >
      <div class="flex items-center gap-6">
        <div class="relative whitespace-nowrap text-2xl md:text-3xl">
          trello clone
        </div>
        <button
          class="whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50 
					       hover:text-slate-900"
          onClick={() => auth()}
        >
          Sign in
        </button>
        <div class="relative flex h-8 w-8 items-center justify-center">
          <IconBrandGithub class="absolute"></IconBrandGithub>
          <a
            class="absolute flex cursor-pointer content-center items-center justify-center 
                 fill-slate-50 opacity-0 transition hover:opacity-100"
            href="https://github.com/chompaa/trello-clone"
            target="_blank"
          >
            <IconBrandGithubFilled></IconBrandGithubFilled>
          </a>
        </div>
        {user}
      </div>
    </div>
  );
};
