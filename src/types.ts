export interface CardItem {
  id: string;
  content: string;
  description?: string;
  todos?: TodoItem[];
  color?: string;
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

export enum CardState {
  normal,
  editing,
  dialog,
}

export const CardColors = {
  red: "#f87462",
  orange: "#faa53d",
  yellow: "#e2b203",
  green: "#4bce97",
  blue: "#579dff",
  purple: "#9f8fef",
  pink: "#e774bb",
};
