import React from 'react';

function Toolbar() {
  const handleCLick = () => {
    alert('hello');
    
  };
 
  return <div className='Toolbar'>
    <button className='Toolbtn' onClick={handleCLick}> ≡ </button>
  
  </div>;
}

export default Toolbar;
  