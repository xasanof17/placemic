import Image from "next/image";
import Link from "next/link";

type HeaderLinkProps = {
  Icon: React.ReactNode;
  href: string;
  title: string;
  count?: number;
};

export const HeaderLink = ({ Icon, href, title, count }: HeaderLinkProps) => {
  const variants = {
    box: "relative flex flex-col items-center justify-center space-y-1 p-2 rounded-full s:rounded-none s:p-0 hover:bg-gray-300 s:hover:bg-transparent",
    count:
      "absolute right-4 top-0 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-center text-xs text-white",
  };
  return (
    <Link href={href} className={variants.box}>
      {count !== undefined && count > 0 && (
        <p className={variants.count}>{count}</p>
      )}
      <div className="relative h-7 w-7">{Icon}</div>
      <p className="hidden text-sm font-normal text-black lg:inline">{title}</p>
    </Link>
  );
};

export const HeaderLinks = () => {
  return (
    <div className="s:gap-4 s:grid flex grid-cols-3 items-center justify-evenly gap-2 space-x-3 sm:gap-6 lg:gap-4">
      <HeaderLink
        href="/"
        Icon={
          <Image src="/assets/icons/user.svg" alt="user icon" fill role="img" />
        }
        title="Войти"
      />
      <HeaderLink
        href="/"
        Icon={
          <Image
            src="/assets/icons/like-heart.svg"
            alt="heart icon"
            fill
            role="img"
          />
        }
        title="Избранное"
        count={0}
      />
      <HeaderLink
        href="/"
        Icon={
          <Image
            src="/assets/icons/shop-cart.svg"
            alt="cart icon"
            fill
            role="img"
          />
        }
        title="Корзина"
        count={0}
      />
    </div>
  );
};
