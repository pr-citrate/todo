import React from 'react';

function Toolbar() {
  const handleCLick = () => {
    alert('hello');
    
  };
 
  return <div className='Toolbar'>
    <button className='Toolbtn' onClick={handleCLick}><img src='./../../assets/menu-icon.svg' alt='menu-icon' /></button>
  
  </div>;
}

export default Toolbar;
  