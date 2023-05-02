import React, { useState } from 'react';
import uuid from 'react-uuid';
import './../styles/Input.scss';

function Input({ todos, setTodos }) {
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() === '') {
      return;
    }
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: uuid(),
        task: inputText,
        status: false,
      },
    ]);
    setInputText('');
  };

  const handleOnChange = e => {
    setInputText(e.target.value);
  };

  const handleOnKeypress = e => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className='Input'>
      <input className='inputfield' type='text' placeholder='What needs to be done?' value={inputText} onChange={handleOnChange} onKeyPress={handleOnKeypress} />
      <button className='add-button' onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default Input;
