function Main() {
  return (
    <div className='Main'>
      <Input className='App-input' todos={todos} setTodos={setTodos} />
      <List className='App-list' />
    </div>
  );
}
