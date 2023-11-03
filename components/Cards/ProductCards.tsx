import { FC } from "react";
import { Card } from "./Card";

type CardsType = {
  title?: string;
};

const Cards: FC<CardsType> = ({ title }) => {
  return (
    <section id="cards" role="main" className="my-10">
      <div className="container flex flex-col">
        <h2 className="mb-5 text-2xl font-normal text-black">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Cards;
