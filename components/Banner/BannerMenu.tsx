import { bannerLinks } from "@/constants";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const variants = {
  link: {
    box: "flex w-full items-center justify-start space-x-2 xl:space-x-3",
    title: "text-sm xl:text-base font-normal text-black",
  },
};

const BannerMenu = () => {
  return (
    <div className="h-full bg-white shadow-xl">
      <div className="flex items-center justify-start space-x-2 bg-gradient-to-r from-pink-500 to-indigo-500 px-3 py-2 xl:space-x-3 xl:px-7">
        <EllipsisVerticalIcon className="h-6 w-6 text-white" />
        <p className="text-sm font-medium text-white xl:text-base">
          Популярные категории
        </p>
      </div>
      <ul className="flex h-full flex-col space-y-3 py-3">
        {bannerLinks.map(({ src, title }, i) => (
          <li key={i} className="px-3 xl:px-7">
            <Link href="/" className={variants.link.box}>
              <div className="relative h-5 w-5 xl:h-6 xl:w-6">
                <Image src={src} alt={title} fill />
              </div>
              <span className={variants.link.title}>{title}</span>
            </Link>
          </li>
        ))}
        <li className="px-3 xl:px-7">
          <Link href="/" className={`${variants.link.box} space-x-2`}>
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-sm font-normal xl:text-base">
              Все категории
            </span>
            <ChevronDownIcon className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BannerMenu;
