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
      <CheckButton onClick={handleCheckButtonOnClick} status={findTodo().status} />
      <p className='Listitem-value'>{findTodo().task}</p>
      <button className='Listitem-button-edit'>edit</button>
      <button className='Listitem-button-delete' onClick={handleDeleteOnClick}>
        delete
      </button>
    </div>
  );
}

export default ListItem;
