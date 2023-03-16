import ListItem from './ListItem';

function List({ todos, setTodos }) {
  return (
    <div className='List'>
      {todos.map(todo => (
        <ListItem key={todo.id} id={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default List;
