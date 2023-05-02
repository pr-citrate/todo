import CheckButton from './CheckButton';
import './../styles/Listitem.scss';
import { useRef, useState } from 'react';

function ListItem({ id, todos, setTodos }) {
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteOnClick = () => {
    setTodos(todos.filter(obj => obj.id !== id));
  };

  const handleCheckButtonOnClick = () => {
    setTodos(todos.map(obj => (obj.id !== id ? obj : { ...obj, status: !obj.status })));
  };

  const handleEditOnClick = () => {
    const todo = findTodo();
    setIsEditing(true);
    inputRef.current.disabled = false;
    inputRef.current.focus();
    inputRef.current.setSelectionRange(0, todo.task.length);
  };

  const handleTaskOnChange = event => {
    setIsEditing(true);
    setTodos(todos.map(obj => (obj.id === id && event.target.value.trim() === '' ? { ...obj, task: event.target.value } : obj)));
  };

  const handleTaskOnBlur = () => {
    setIsEditing(false);
    inputRef.current.disabled = true;
  };

  const handleTaskOnEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsEditing(false);
      inputRef.current.disabled = true;
    }
  };

  const findTodo = () => {
    return todos.find(obj => obj.id === id);
  };

  return (
    <div className='ListItem'>
      <div className='text'>
        <CheckButton onClick={handleCheckButtonOnClick} status={findTodo().status} />
        <input
          ref={inputRef}
          className='task'
          value={findTodo().task}
          disabled={!isEditing}
          onChange={handleTaskOnChange}
          onBlur={handleTaskOnBlur}
          onKeyDown={handleTaskOnEnter}
        />
      </div>
      <div className='buttons'>
        <button className={`button edit ${isEditing ? 'editing' : ''}`} onClick={handleEditOnClick}>
          {isEditing ? 'editing' : 'edit'}
        </button>
        <button className='button delete' onClick={handleDeleteOnClick}>
          delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
