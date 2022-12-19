import React, { useState } from 'react';
import { Trash2, Send } from 'react-feather';

import { Input } from 'components/Input';

import * as S from './Todo.styles';

type Todos = {
  id: number;
  text: string;
};

// interface TodoListProps {
//   todos: Todo[];
// }

export const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todos[]>([
    { id: 1, text: 'Lorem Ipsum' },
    { id: 2, text: 'frankstein' },
    { id: 3, text: 'ben 10' },
    { id: 4, text: 'miranha' },
    { id: 5, text: 'stale' },
    { id: 6, text: 'refresh' },
    { id: 7, text: 'batman' },
  ]);

  const handleAddTodo = () => {
    //TODO: same id when delete any item and add another one
    setTodos([...todos, { id: todos.length + 1, text: inputValue }]);
    setInputValue('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //TODO: reorder when dragged

  return (
    <S.TodoContainer>
      <h1>Tarefas</h1>
      {todos.length === 0 ? (
        <h1>nada aqui</h1>
      ) : (
        <S.TodoItems>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <li>{todo.text}</li>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            );
          })}
        </S.TodoItems>
      )}
      <S.InputTodo>
        <Input
          placeholder="Adicione uma tarefa"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div onClick={() => handleAddTodo()}>
          <Send />
        </div>
      </S.InputTodo>
    </S.TodoContainer>
  );
};
