import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { HeaderForm } from "./HeaderForm";
import { HeaderLinks } from "./HeaderLinks";

export const HeaderBottom = () => {
  return (
    <div
      role="main"
      className="flex grid-cols-9 items-center justify-between gap-5 lg:grid xl:gap-8"
    >
      <div className="flex h-full items-center justify-between space-x-3 lg:col-span-2 xl:space-x-7">
        <button
          type="button"
          title="Menu"
          role="button"
          className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-2 lg:p-3 xl:p-5"
        >
          <Bars3Icon className="h-8 w-8 text-white" />
        </button>
        <Link
          href="/"
          role="link"
          className="s:w-[140px] flex h-[50px] w-[180px] items-center justify-center lg:h-full lg:w-[130px] xl:w-full"
        >
          <div className="relative h-full w-full">
            <Image
              src="/assets/placemic-logo.svg"
              alt="PlaceMic Logo"
              role="img"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden w-full max-w-[360px] items-start md:flex md:max-w-full md:flex-1 lg:col-span-5">
        <HeaderForm />
      </div>
      <div className="s:block hidden lg:col-span-2">
        <HeaderLinks />
      </div>
    </div>
  );
};
