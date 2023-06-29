import { Card } from ".";

import { CardItem } from "../types";

export const List = ({
  title,
  cards,
  changeContent,
  changeDescription,
  removeCard,
}: {
  title: string;
  cards: CardItem[];
  changeContent: (index: number, content: string) => void;
  changeDescription: (index: number, description: string) => void;
  removeCard: (cardIndex: number) => void;
}) => {
  return (
    <>
      {cards?.map((card: CardItem, idx: number) => (
        <Card
          key={card.id}
          id={card.id}
          index={idx}
          listTitle={title}
          content={card.content}
          description={card.description}
          changeContent={(content: string) => changeContent(idx, content)}
          changeDescription={(description: string) =>
            changeDescription(idx, description)
          }
          removeCard={() => removeCard(idx)}
        ></Card>
      ))}
    </>
  );
};
