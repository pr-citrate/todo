import React from 'react';
function Input({ todos, setTodos }) {
  const [text, setText] = React.useState('');
  return (
    <div className='Input'>
      <div className='input-container'>
        <input type='text' placeholder='What needs to be done?' onChange={e => setText([e])} />
        <input type='button' value='Add' onClick={() => setTodos([...todos, text])}></input>
      </div>
    </div>
  );
}

export default Input;
