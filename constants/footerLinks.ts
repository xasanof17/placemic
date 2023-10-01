type FooterLink = {
  href: string;
  title: string;
};

type FooterLinks = {
  title: string;
  links: Array<FooterLink>;
};

const footerLinks: FooterLinks[] = [
  {
    title: "Покупателям",
    links: [
      {
        href: "/",
        title: "Как это работает",
      },
      {
        href: "/",
        title: "Защита покупателя",
      },
      {
        href: "/",
        title: "Условия оплаты",
      },
      {
        href: "/",
        title: "Условия использования",
      },
      {
        href: "/",
        title: "Регистрация аккаунта",
      },
    ],
  },
  {
    title: "Поставщикам",
    links: [
      {
        href: "/",
        title: "Как стать продавцом",
      },
      {
        href: "/",
        title: "Правила участия",
      },
      {
        href: "/",
        title: "Личный кабинет продавца",
      },
    ],
  },
  {
    title: "O компании",
    links: [
      {
        href: "/",
        title: "O PlaceMik",
      },
      {
        href: "/",
        title: "Новости",
      },
      {
        href: "/",
        title: "Часто задаваемые вопросы",
      },
      {
        href: "/",
        title: "Служба поддержки",
      },
      {
        href: "/",
        title: "Сообщить о нарушении авторских прав",
      },
    ],
  },
];

export default footerLinks;