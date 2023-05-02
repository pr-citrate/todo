import React from 'react';
import toolbarBtn from './../assets/menu-icon.svg';

function Toolbar() {
  const handleCLick = () => {
    alert('hello');
  };

  return (
    <div className='Toolbar'>
      <button className='Toolbtn' onClick={handleCLick}>
        <img src={toolbarBtn} alt='menu-icon' />
      </button>
    </div>
  );
}

export default Toolbar;
