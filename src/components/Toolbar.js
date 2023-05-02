import React from 'react';

function Toolbar() {
  const handleCLick = () => {
    alert('yes! just do it!!!!');
  };
 
  return <div className='Toolbar'>
    <button className='' onClick={handleCLick}> click here~ </button>
  </div>;
}

export default Toolbar;
 