function ListItem({ todo, setTodos }) {
  return (
    <div className='ListItem'>
      <p className='Listitem-value'>{todo.task}</p>
      <button className='Listitem-button-edit'>edit</button>
      <button className='Listitem-button-delete'>delete</button>
    </div>
  );
}

export default ListItem;
