import { Card } from ".";

import { CardItem } from "../types";

export const List = ({
  cards,
  index,
  removeCard,
}: {
  cards: CardItem[];
  index: number;
  removeCard: (listIndex: number, cardIndex: number) => void;
}) => {
  return (
    <>
      {cards.map((card: CardItem, idx: number) => (
        <Card
          key={card.id}
          id={card.id}
          index={idx}
          listIndex={index}
          content={card.content}
          removeCard={removeCard}
        ></Card>
      ))}
    </>
  );
};
