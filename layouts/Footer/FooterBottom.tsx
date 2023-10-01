import Image from "next/image";
import Link from "next/link";

export const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <div className="s:pb-0 flex flex-col items-center justify-between pb-12 sm:flex-row">
      <Link href="/" className="flex items-center justify-center">
        <div className="relative h-[60px] w-[200px]">
          <Image
            src="/assets/footer-logo.svg"
            alt="PlaceMic Logo"
            role="img"
            priority
            fill
          />
        </div>
      </Link>
      <p className="text-center text-sm font-normal text-white sm:text-base">
        &copy; All rights reserved {year}. Made with{" "}
        <Link
          className="text-base font-medium underline underline-offset-2 sm:text-lg"
          href="https://bit.ly/javohir"
          target="_blank"
        >
          JX Team
        </Link>
      </p>
    </div>
  );
};
