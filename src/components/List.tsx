import { Card } from ".";

import { CardItem } from "../types";

export const List = ({
  title,
  cards,
  index,
  removeCard,
}: {
  title: string;
  cards: CardItem[];
  index: number;
  removeCard: (listIndex: number, cardIndex: number) => void;
}) => {
  return (
    <>
      {cards?.map((card: CardItem, idx: number) => (
        <Card
          key={card.id}
          id={card.id}
          index={idx}
          listTitle={title}
          listIndex={index}
          content={card.content}
          removeCard={removeCard}
        ></Card>
      ))}
    </>
  );
};
