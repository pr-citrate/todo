import React from 'react';
function Input({ todos, setTodos }) {
  const [text, setText] = React.useState('');
  return (
    <div className='Input'>
      <div className='input-container'>
        <input type='text' placeholder='What needs to be done?' onChange={e => setText([e])} />
        <button onClick={() => setTodos([...todos, text])}>Add</button>
      </div>
    </div>
  );
}

export default Input;
