import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <Header />
      <Main todos={todos} setTodos={setTodos} />
      <Footer></Footer>
    </div>
  );
}

export default App;
