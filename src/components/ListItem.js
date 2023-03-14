function ListItem({ todo, setTodos }) {
  return (
    <div className='ListItem'>
      <p className='Listitem-value'>{todo}</p>
    </div>
  );
}

export default ListItem;
