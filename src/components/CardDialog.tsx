import {
  IconAlignJustified,
  IconCheckbox,
  IconLayoutCards,
  IconPalette,
  IconPlus,
  IconX,
} from "@tabler/icons-preact";
import { TargetedEvent, createPortal, useRef, useState } from "preact/compat";
import { TextArea, Todo, TodoForm } from ".";
import { CardColors, CardState, TodoItem } from "../types";

export const CardDialog = ({
  setActive,
  listTitle,
  content,
  description,
  todos,
  color,
  changeContent,
  changeDescription,
  changeTodos,
  changeColor,
  removeCard,
}: {
  setActive: (state: CardState) => void;
  listTitle: string;
  content: string;
  description?: string;
  todos?: TodoItem[];
  color?: string;
  changeContent: (content: string) => void;
  changeDescription: (description: string) => void;
  changeTodos: (todos: TodoItem[]) => void;
  changeColor: (color: string) => void;
  removeCard: () => void;
}) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const [todoFormActive, setTodoFormActive] = useState<boolean>(false);
  const [formTodos, setFormTodos] = useState<TodoItem[]>(todos ?? []);

  const { normal } = CardState;

  const handleClose = () => {
    setActive(normal);

    if (!contentRef.current || !descriptionRef.current) {
      return;
    }

    changeContent(contentRef.current.value);
    changeDescription(descriptionRef.current.value);
    changeTodos(formTodos);
  };

  const addTodo = (content: string) => {
    setFormTodos([...formTodos, { content, completed: false }]);
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...formTodos];
    updatedTodos.splice(index, 1);
    setFormTodos(updatedTodos);
  };

  const updateTodo = (index: number, completed: boolean) => {
    const updatedTodos = [...formTodos];
    updatedTodos[index].completed = completed;
    setFormTodos(updatedTodos);
  };

  const getTodoPercentComplete = () => {
    if (!formTodos.length) {
      return "0%";
    }

    const completed = formTodos.filter(
      (todo: TodoItem) => todo.completed
    ).length;
    const total = formTodos.length;

    return `${Math.floor((completed / total) * 100)}%`;
  };

  return createPortal(
    <div
      class="max-w-screen fixed left-0 top-0 flex h-dynamic max-h-dynamic w-screen cursor-pointer 
             content-center justify-center bg-slate-900/75 p-2 lg:py-16"
      onClick={handleClose}
    >
      <div
        class={`flex h-fit max-h-full w-full cursor-default flex-col gap-4 overflow-y-auto 
               overflow-x-hidden rounded-xl bg-slate-200 px-6 py-4 lg:max-w-2xl ${
                 color && "border-t-[3rem]"
               }`}
        style={{ borderColor: color }}
        onClick={(e: TargetedEvent<HTMLElement>) => e.stopPropagation()}
      >
        <div>
          <div class="flex items-center gap-2 p-2">
            <IconLayoutCards class="text-slate-500"></IconLayoutCards>
            <h1 class="h-fit w-full px-3 py-1 font-semibold">Title</h1>
            <div
              class="-m-2 cursor-pointer rounded bg-slate-300 p-1 text-slate-500 
                   hover:text-slate-900"
              onClick={() => handleClose()}
            >
              <IconX></IconX>
            </div>
          </div>
          <div class="ml-[3.25rem]">
            <TextArea
              ref={contentRef}
              styles="focus:border-slate-900 focus:bg-slate-50 bg-slate-100 border-slate-300 
                      rounded border-2 font-semibold px-3 py-1 text-slate-950"
              maxRows={4}
              maxLength={100}
            >
              {content}
            </TextArea>
          </div>
          <div class="mx-[3.25rem] mt-1 text-slate-500">
            In list
            <strong class="font-semibold"> {listTitle}</strong>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2 p-2">
            <IconAlignJustified class="text-slate-500"></IconAlignJustified>
            <h1 class="h-fit px-3 py-1 font-semibold">Description</h1>
          </div>
          <div class="ml-[3.25rem]">
            <TextArea
              ref={descriptionRef}
              placeholder="Add a more detailed description..."
              styles="focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2
                      px-3 py-1 text-slate-950 border-slate-300"
              minRows={2}
              maxRows={4}
              maxLength={100}
            >
              {description}
            </TextArea>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2 p-2 pb-0">
            <IconCheckbox class="text-slate-500"></IconCheckbox>
            <h1 class="h-fit px-3 py-1 font-semibold">Checklist</h1>
          </div>
          <div class="flex items-center gap-2 px-2 pb-2">
            <div class="relative">
              <div class="absolute -ml-2 -mt-3 w-10 text-center">
                {getTodoPercentComplete()}
              </div>
            </div>
            <div class="relative my-2 -mr-2 ml-[2.75rem] h-2 w-full rounded bg-slate-300">
              <div
                class="absolute h-2 rounded bg-slate-900 transition-all duration-500"
                style={{ width: getTodoPercentComplete() }}
              ></div>
            </div>
          </div>
          <div class="-mr-[3.25rem] flex flex-col px-[3.25rem] pb-4 empty:pb-1">
            {formTodos.map((todo, index) => (
              <Todo
                key={index}
                {...todo}
                updateTodo={(completed: boolean) =>
                  updateTodo(index, completed)
                }
                removeTodo={() => removeTodo(index)}
              ></Todo>
            ))}
          </div>
          <div class="mb-2 ml-[3.25rem]">
            {todoFormActive ? (
              <TodoForm
                setActive={(active) => setTodoFormActive(active)}
                addTodo={addTodo}
              ></TodoForm>
            ) : (
              <button
                class="flex items-center gap-2 rounded-md bg-slate-900 px-2 
                       py-1 text-slate-50 hover:bg-slate-950"
                onClick={() => setTodoFormActive(true)}
              >
                <IconPlus size={18}></IconPlus> Add an item
              </button>
            )}
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2 p-2">
            <IconPalette class="text-slate-500"></IconPalette>
            <h1 class="h-fit px-3 py-1 font-semibold">Color</h1>
          </div>
          <div class="ml-[3.25rem] flex gap-1">
            {Object.values(CardColors).map(
              (buttonColor: string, index: number) => (
                <button
                  key={index}
                  class={`h-8 w-8 rounded-md border-2 ${
                    buttonColor === color
                      ? "border-slate-900"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: buttonColor }}
                  onClick={() => changeColor(buttonColor)}
                ></button>
              )
            )}
            <button
              class={`flex content-center justify-center rounded-md border-2 border-slate-300 
              bg-slate-300 p-[0.125rem] text-slate-600 hover:border-slate-900 
              hover:text-slate-900 ${
                !color && "border-slate-900 text-slate-900"
              }`}
              onClick={() => changeColor("")}
            >
              <IconX></IconX>
            </button>
          </div>
        </div>
        <button
          class="mb-1 flex w-full items-center justify-center rounded-md bg-slate-300 p-1 
                 font-semibold text-slate-500 hover:text-slate-900"
          onClick={() => removeCard()}
        >
          Archive this card
        </button>
      </div>
    </div>,
    document.body
  );
};
