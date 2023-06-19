export interface CardItem {
  id: string;
  content: string;
}

export interface ListItem {
  title: string;
  cards: CardItem[];
}
