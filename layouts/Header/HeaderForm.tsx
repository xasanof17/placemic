import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export const HeaderForm = () => {
  return (
    <form className="flex h-12 flex-1 space-x-2 border-[3px] border-indigo-600 p-1 pr-3 ring-indigo-600 transition-all duration-200 focus:ring-1 lg:h-14 lg:pr-5">
      <button
        type="button"
        title="Везде"
        className="flex h-full items-center justify-center space-x-1 bg-violet-300 pl-5 pr-4"
      >
        <span className="text-sm font-normal">Везде</span>
        <ChevronDownIcon className="h-5 w-5" />
      </button>
      <input
        id="search"
        type="text"
        className="h-full flex-1 text-sm font-normal outline-none"
        placeholder="Поиск..."
      />
      <button
        type="button"
        title="Search"
        role="button"
        className="flex h-full items-center justify-center"
      >
        <MagnifyingGlassIcon className="h-7 w-7" />
      </button>
    </form>
  );
};
