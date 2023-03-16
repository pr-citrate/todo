function CheckButton({ status, onClick }) {
  return (
    <div className='CheckButton' onClick={onClick}>
      <p>status:{status ? 'completed' : 'uncompleted'}</p>
    </div>
  );
}

export default CheckButton;
