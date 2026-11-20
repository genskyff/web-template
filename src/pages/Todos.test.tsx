import { beforeEach, describe, expect, test } from '@rstest/core';
import { fireEvent, render, screen } from '@testing-library/react';

import { useTodoStore } from '@/stores/todo';

import Todos from './Todos';

describe('Todos page', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [{ id: '1', text: 'Write docs', done: false }] });
  });

  test('adds a todo from the form', () => {
    render(<Todos />);

    const input = screen.getByRole('textbox', { name: 'New todo' });
    fireEvent.change(input, { target: { value: 'Ship it' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByRole('checkbox', { name: 'Ship it' })).not.toBeChecked();
    expect(input).toHaveValue('');
  });

  test('toggles a todo through its labelled checkbox', () => {
    render(<Todos />);

    const checkbox = screen.getByRole('checkbox', { name: 'Write docs' });
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
