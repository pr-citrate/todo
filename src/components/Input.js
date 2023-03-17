import React from 'react';
import uuid from 'react-uuid';
import './../styles/Input.scss';

function Input({ todos, setTodos }) {
  const [inputText, setInputText] = React.useState('');
  const addTodo = () => setTodos([...todos, { task: inputText, status: false, id: uuid() }]);
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
      <input className='inputfield' type='text' placeholder='What needs to be done?' onChange={handleOnChange} onKeyPress={handleOnKeypress} />
      <button className='add-button' onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default Input;
