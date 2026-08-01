import { partition } from 'lodash-es';
import { Plus, Trash2 } from 'lucide-react';
import { type FC, type FormEvent, useState } from 'react';

import { type Todo, useTodoStore } from '@/stores/todo';

const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  const toggle = useTodoStore((state) => state.toggle);
  const remove = useTodoStore((state) => state.remove);

  return (
    <li className="flex items-center gap-3 py-2">
      <input
        type="checkbox"
        className="checkbox checkbox-sm"
        checked={todo.done}
        onChange={() => toggle(todo.id)}
      />
      <span className={todo.done ? 'flex-1 line-through opacity-50' : 'flex-1'}>{todo.text}</span>
      <button
        type="button"
        className="btn btn-ghost btn-sm btn-square"
        aria-label="Delete"
        onClick={() => remove(todo.id)}
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};

const Todos: FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const add = useTodoStore((state) => state.add);
  const [draft, setDraft] = useState('');

  const [done, active] = partition(todos, (todo) => todo.done);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const text = draft.trim();
    if (text) {
      add(text);
      setDraft('');
    }
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          Todos
          <span className="badge badge-neutral">
            {active.length} / {todos.length}
          </span>
        </h2>

        <form className="flex gap-2" onSubmit={submit}>
          <input
            type="text"
            className="input flex-1"
            placeholder="What needs to be done?"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-square" aria-label="Add">
            <Plus size={18} />
          </button>
        </form>

        <ul className="divide-base-300 divide-y">
          {[...active, ...done].map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
