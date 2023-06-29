export interface CardItem {
  id: string;
  content: string;
  description?: string;
}

export interface ListItem {
  title: string;
  cards: CardItem[];
}

export enum DragType {
  Card = "card",
  List = "list",
}
