import ListItem from './ListItem';

function List({ todos, setTodos }) {
  return (
    <div className='List'>
      {todos.map((todo, index) => (
        <ListItem key={index} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default List;
