import {
  IconAlignJustified,
  IconCheckbox,
  IconLayoutCards,
  IconX,
} from "@tabler/icons-preact";
import TextArea from "./TextArea";
import { createPortal, useEffect, useRef, useState } from "preact/compat";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { TodoItem } from "../types";

const CardDialog = ({
  setActive,
  listTitle,
  content,
  description,
  todos,
  changeContent,
  changeDescription,
  changeTodos,
}: {
  setActive: (active: boolean) => void;
  listTitle: string;
  content: string;
  description?: string;
  todos?: TodoItem[];
  changeContent: (content: string) => void;
  changeDescription: (description: string) => void;
  changeTodos: (todos: TodoItem[]) => void;
}) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const [todoFormActive, setTodoFormActive] = useState<boolean>(false);
  const [formTodos, setFormTodos] = useState<TodoItem[]>(todos ?? []);

  const handleClose = () => {
    setActive(false);

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
    <div class="absolute left-0 top-0 flex h-screen w-screen justify-center bg-slate-900/75 p-10">
      <div class="m-2 flex h-fit w-full flex-col gap-4 rounded-xl bg-slate-200 px-6 py-4 lg:w-1/3">
        <div>
          <div class="flex items-center gap-2 p-2">
            <IconLayoutCards class="text-slate-500"></IconLayoutCards>
            <h1 class="h-fit w-full px-3 py-1 font-semibold">Title</h1>
            <div
              class="-m-2 cursor-pointer rounded bg-slate-300 p-1 text-slate-500 hover:text-slate-900"
              onClick={() => handleClose()}
            >
              <IconX></IconX>
            </div>
          </div>
          <div class="ml-[3.25rem]">
            <TextArea
              ref={contentRef}
              styles="focus:border-slate-900 focus:bg-slate-50 bg-slate-100 border-slate-300 rounded border-2 font-semibold 
                      px-3 py-1 text-slate-950"
              minRows={1}
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
            <div class="absolute">
              <div class="-ml-2 w-10 text-center">
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
                class="rounded-md bg-slate-900 px-2 py-1 text-slate-50 
                       hover:bg-slate-950"
                onClick={() => setTodoFormActive(true)}
              >
                Add an item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CardDialog;
