import { footerLinks } from "@/constants";
import Link from "next/link";
import {
  FaFacebookF,
  FaTelegram,
  FaInstagram,
  FaGlobe,
  FaGithub,
} from "react-icons/fa6";

export const FooterTop = () => {
  const variants = {
    title: "text-lg font-medium text-white mb-2",
    link: "text-sm font-normal text-white duration-300 transition-all underline-offset-2 hover:underline",
  };
  const socials = [
    {
      Icon: FaFacebookF,
      href: "https://t.me/xxvlw",
      title: "Facebook",
    },
    {
      Icon: FaTelegram,
      href: "https://t.me/xxvlw",
      title: "Telegram",
    },
    {
      Icon: FaInstagram,
      href: "https://t.me/xxvlw",
      title: "Instagram",
    },
    {
      Icon: FaGlobe,
      href: "https://bit.ly/javohir",
      title: "Website",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/xasanof17",
      title: "Github",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      {footerLinks.map(({ title, links }, i) => (
        <div key={i} className="flex flex-col">
          <h2 role="heading" className={variants.title}>
            {title}
          </h2>
          <ul role="list" className="flex flex-col space-y-1">
            {links.map(({ href, title }, i) => (
              <li role="listitem" key={i}>
                <Link href={href} className={variants.link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-col">
        <h2 className="text-sm font-normal text-white">
          Хотите быть в курсе последних новостей и акций?
        </h2>
        <form className="my-3 flex flex-col items-center justify-center space-y-3 sm:my-6">
          <input
            id="email"
            autoComplete="true"
            type="text"
            className="w-full border border-white bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-300 sm:text-base"
            placeholder="xasanof17@yandex.ru"
          />
          <button
            type="submit"
            role="button"
            title="Subscribe"
            className="h-full w-full bg-white py-2 focus:outline-violet-500"
          >
            <p className="bg-gradient-to-r from-purple-100 to-indigo-500 bg-clip-text text-sm font-normal sm:text-base">
              Подписаться
            </p>
          </button>
        </form>
        <h2 className={variants.title}>Мы в соцсетях</h2>
        <div className="flex items-center space-x-3">
          {socials.map(({ Icon, href, title }, i) => (
            <Link href={href} key={i} target="_blank" title={title}>
              <Icon className="hover:scale-70 h-7 w-7 text-white transition-all duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
