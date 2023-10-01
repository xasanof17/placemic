import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const variants = {
  list: {
    item: "flex items-center space-x-1",
    itemText: "font-light text-black text-sm",
  },
};

export const HeaderTop = () => {
  return (
    <div className="hidden items-center justify-center sm:flex">
      <div className="flex flex-1 items-center justify-center">
        <ul role="list" className="flex items-center space-x-5">
          <li role="listitem" className={variants.list.item}>
            <span className={variants.list.itemText}>Покупателям</span>
            <ChevronDownIcon className="h-5 w-5" />
          </li>
          <li role="listitem" className={variants.list.item}>
            <span className={variants.list.itemText}>Поставщикам</span>
            <ChevronDownIcon className="h-5 w-5" />
          </li>
          <li role="listitem" className="flex items-center justify-center">
            <span className={variants.list.itemText}>Частые вопросы</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <span className="fi fi-ru"></span>
        <p className={`${variants.list.itemText} border-x px-2`}>Русский</p>
        <ChevronDownIcon className="h-5 w-6" />
      </div>
    </div>
  );
};
