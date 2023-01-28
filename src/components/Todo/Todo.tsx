import React, { type FormEvent, useState } from 'react';
import { Trash2, Send } from 'react-feather';

import { Input } from 'components/Input';

import * as S from './Todo.styles';

type Todos = {
  id: number;
  text: string;
};

export const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todos[]>([
    { id: 1, text: 'Lorem Ipsum' },
    { id: 2, text: 'frankstein' },
    { id: 3, text: 'ben 10' },
  ]);

  const handleAddTodo = () => {
    //TODO: same id when delete any item and add another one
    if (inputValue === '') return;
    setTodos((prevState) => [...prevState, { id: Number(new Date()), text: inputValue }]);
    setInputValue('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddTodo();
  };

  //TODO: reorder when dragged

  return (
    <S.TodoContainer>
      <h1>Tarefas</h1>
      {todos.length === 0 ? (
        <>
          <h2>nada aqui</h2>
          <h3>Crie uma tarefa abaixo</h3>
        </>
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
      <S.InputTodo onSubmit={handleSubmit}>
        <Input
          placeholder="Adicione uma tarefa"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <S.IconContainer onClick={() => handleAddTodo()}>
          <Send />
        </S.IconContainer>
      </S.InputTodo>
    </S.TodoContainer>
  );
};
