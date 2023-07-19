import { Card } from ".";

import { CardItem, TodoItem } from "../types";

export const List = ({
  title,
  cards,
  changeContent,
  changeDescription,
  changeTodos,
  changeColor,
  removeCard,
}: {
  title: string;
  cards: CardItem[];
  changeContent: (index: number, content: string) => void;
  changeDescription: (index: number, description: string) => void;
  changeTodos: (cardIndex: number, todos: TodoItem[]) => void;
  changeColor: (cardIndex: number, color: string) => void;
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
          todos={card.todos}
          color={card.color}
          changeContent={(content: string) => changeContent(idx, content)}
          changeDescription={(description: string) =>
            changeDescription(idx, description)
          }
          changeTodos={(todos: TodoItem[]) => changeTodos(idx, todos)}
          changeColor={(color: string) => changeColor(idx, color)}
          removeCard={() => removeCard(idx)}
        ></Card>
      ))}
    </>
  );
};
