import { Card } from ".";

import { CardItem } from "../types";

export const List = ({ cards }: { cards: CardItem[] }) => {
  return (
    <>
      {cards.map((card: CardItem, index: number) => (
        <Card
          key={card.id}
          id={card.id}
          index={index}
          content={card.content}
        ></Card>
      ))}
    </>
  );
};
