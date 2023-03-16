function ListItem({ id, todos, setTodos }) {
  const handleDeleteOnClick = () => {
    setTodos(
      todos.splice(
        todos.findIndex(obj => obj.id === id),
        1
      )
    );
  };

  return (
    <div className='ListItem'>
      <p className='Listitem-value'>{todos.find(obj => obj.id === id).task}</p>
      <button className='Listitem-button-edit'>edit</button>
      <button className='Listitem-button-delete' onClick={handleDeleteOnClick}>
        delete
      </button>
    </div>
  );
}

export default ListItem;
