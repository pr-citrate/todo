import Toolbar from './components/Toolbar';
import './styles/Header.scss';

function Header({ todos, setTodos }) {
  return (
    <div className='Header'>
      <div className='left'>
        <Toolbar todos={todos} setTodos={setTodos} />
      </div>
      <div className='middle'>
        <h1 className='title'>TODO</h1>
      </div>
      <div className='right'></div>
    </div>
  );
}
export default Header;
