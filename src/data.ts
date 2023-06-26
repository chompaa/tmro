import { v4 as uuidv4 } from "uuid";

export const defaultData = [
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
			},
		],
	},
	{
		title: "in progress",
		cards: [
			{
				id: uuidv4(),
				content: "write story",
			},
			{
				id: uuidv4(),
				content: "add levels",
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
		],
	},
]
