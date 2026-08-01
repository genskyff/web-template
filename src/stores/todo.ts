import { nanoid } from 'nanoid';
import { create } from 'zustand';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

interface TodoStore {
  todos: Todo[];
  add: (text: string) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [
    { id: nanoid(), text: 'Read the Rsbuild docs', done: true },
    { id: nanoid(), text: 'Build something', done: false },
  ],
  add: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: nanoid(), text, done: false }],
    })),
  toggle: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    })),
  remove: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
