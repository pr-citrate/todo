import CheckButton from './CheckButton';
import './../styles/Listitem.scss';

function ListItem({ id, todos, setTodos }) {
  const handleDeleteOnClick = () => {
    setTodos(todos.filter(obj => obj.id !== id));
  };

  const handleCheckButtonOnClick = () => {
    console.log('clicked:' + id);
    setTodos(todos.map(obj => (obj.id !== id ? obj : { ...obj, status: !obj.status })));
  };

  const findTodo = () => {
    return todos.find(obj => obj.id === id);
  };

  return (
    <div className='ListItem'>
      <div className='text'>
        <CheckButton onClick={handleCheckButtonOnClick} status={findTodo().status} />
        <input className='task' placeholder={findTodo().task} disabled={true}></input>
      </div>
      <div className='buttons'>
        <button className='button edit'>edit</button>
        <button className='button delete' onClick={handleDeleteOnClick}>
          delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
