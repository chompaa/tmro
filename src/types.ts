export interface CardItem {
  id: string;
  content: string;
  description?: string;
  todos?: TodoItem[];
}

export interface ListItem {
  title: string;
  cards: CardItem[];
}

export interface TodoItem {
  content: string;
  completed: boolean;
}

export enum DragType {
  Card = "card",
  List = "list",
}
