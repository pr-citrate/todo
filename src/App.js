import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './styles/App.scss';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <div className='App-upper'>
        <Header />
        <Main todos={todos} setTodos={setTodos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
