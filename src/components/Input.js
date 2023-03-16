import React from 'react';
import uuid from 'react-uuid';

function Input({ todos, setTodos }) {
  const [inputText, setInputText] = React.useState('');
  const addTodo = () => setTodos([...todos, { text: inputText, status: false, id: uuid() }]);
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
      <div className='input-container'>
        <input type='text' placeholder='What needs to be done?' onChange={handleOnChange} onKeyPress={handleOnKeypress} />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default Input;
