import { v4 as uuidv4 } from "uuid";
import { CardColors, ListItem } from "./types";

export const defaultData: ListItem[] = [
  {
    title: "to do",
    cards: [
      {
        id: uuidv4(),
        content: "add sprites",
      },
      {
        id: uuidv4(),
        content: "implement main menu",
      },
      {
        id: uuidv4(),
        content: "add sounds",
        todos: [
          {
            content: "victory.wav",
            completed: true,
          },
          {
            content: "game_over.wav",
            completed: false,
          },
          {
            content: "soundtrack.wav",
            completed: false,
          },
        ],
        color: CardColors.purple,
      },
    ],
  },
  {
    title: "in progress",
    cards: [
      {
        id: uuidv4(),
        content: "write story",
        description: "need to outline the story and write the script",
        todos: [
          {
            content: "ask friends for feedback",
            completed: false,
          },
        ],
        color: CardColors.red,
      },
      {
        id: uuidv4(),
        content: "add levels",
        color: CardColors.red,
      },
      {
        id: uuidv4(),
        content: "send demo to friends",
      },
      {
        id: uuidv4(),
        content: "marketing",
      },
    ],
  },
  {
    title: "done",
    cards: [
      {
        id: uuidv4(),
        content: "implement player movement",
      },
      {
        id: uuidv4(),
        content: "meet with investors to discuss marketing strategy and budget",
      },
    ],
  },
];
