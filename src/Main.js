import Input from './components/Input';
import List from './components/List';
import './styles/Main.scss';

function Main({ todos, setTodos }) {
  return (
    <div className='Main'>
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Main;
