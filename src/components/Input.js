import React from 'react';
function Input({ todos, setTodos }) {
  const [text, setText] = React.useState('');
  const addTodo = () => setTodos([...todos, text]);
  const handleOnChange = e => {
    setText(e.target.value);
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
