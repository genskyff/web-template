import { beforeEach, describe, expect, test } from '@rstest/core';

import { useTodoStore } from './todo';

const initial = useTodoStore.getState();

const reset = () => {
  useTodoStore.setState({ ...initial, todos: [] }, true);
};

describe('todo store', () => {
  beforeEach(reset);

  test('adds a todo', () => {
    useTodoStore.getState().add('Write a test');

    const { todos } = useTodoStore.getState();
    expect(todos).toHaveLength(1);
    expect(todos[0]?.text).toBe('Write a test');
    expect(todos[0]?.done).toBe(false);
  });

  test('gives each todo a unique id', () => {
    const { add } = useTodoStore.getState();
    add('one');
    add('two');

    const [first, second] = useTodoStore.getState().todos;
    expect(first?.id).not.toBe(second?.id);
  });

  test('toggles a todo without touching the others', () => {
    const { add } = useTodoStore.getState();
    add('one');
    add('two');

    const [first, second] = useTodoStore.getState().todos;
    useTodoStore.getState().toggle(first!.id);

    const todos = useTodoStore.getState().todos;
    expect(todos.find((todo) => todo.id === first!.id)?.done).toBe(true);
    expect(todos.find((todo) => todo.id === second!.id)?.done).toBe(false);
  });

  test('removes a todo by id', () => {
    const { add } = useTodoStore.getState();
    add('one');
    add('two');

    const [first] = useTodoStore.getState().todos;
    useTodoStore.getState().remove(first!.id);

    const todos = useTodoStore.getState().todos;
    expect(todos).toHaveLength(1);
    expect(todos.map((todo) => todo.text)).toEqual(['two']);
  });

  test('keeps state immutable across updates', () => {
    useTodoStore.getState().add('one');
    const before = useTodoStore.getState().todos;

    useTodoStore.getState().add('two');
    const after = useTodoStore.getState().todos;

    expect(after).not.toBe(before);
    expect(before).toHaveLength(1);
  });
});
