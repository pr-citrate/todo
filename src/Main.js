import Input from './components/Input';
import List from './components/List';

function Main({ todos, setTodos }) {
  return (
    <div className='Main'>
      <Input className='Main-input' todos={todos} setTodos={setTodos} />
      <List className='Main-list' todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Main;
