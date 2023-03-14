import Toolbar from './components/Toolbar';

function Header({ todos, setTodos }) {
  return (
    <div className='Header'>
      <h1 className='Header-title'>TODO</h1>
      <Toolbar className='Header-toolbar' todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default Header;
