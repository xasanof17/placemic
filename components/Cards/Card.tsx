import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type CardProps = {};

export const Card: FC<CardProps> = () => {
  return (
    <Link
      href="/"
      className="flex flex-col rounded-sm bg-white p-[11px] shadow-2xl transition-all duration-200 ease-in-out hover:shadow-lg"
    >
      <div className="relative h-[260px] w-full">
        <span className="absolute z-10 right-0 top-0 rounded-full border border-red-500 p-1 text-sm font-medium text-black">
          -20%
        </span>
        <div className="relative h-full w-full">
          <Image src="/assets/placemic-logo.svg" alt="" fill />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="flex items-center space-x-5">
          <p className="text-base font-medium tabular-nums text-red-500">
            1 999 {"\u20BD"}
          </p>
          <span className="text-sm font-normal tabular-nums text-gray-400 ">
            2 499 {"\u20BD"}
          </span>
        </div>
        <h3 className="mt-2 text-base font-light leading-5 text-black">
          Футболка с дизайнерским принтом Super Shape 02 фиолетовая
        </h3>
      </div>
    </Link>
  );
};
