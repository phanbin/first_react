import './App.css';

import TodoItem from './components/todoItem';

function App() {
  const todoItems = [
    {title: 'item 1', isComplete: true},
    {title: 'item 2', isComplete: false},
    {title: 'item 3', isComplete: false}
  ];
  // if(todoItems.length > 0){
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <p>To do list</p>
  //         {
  //           todoItems.map((item, index) => <TodoItem key={index} val={item}></TodoItem>)
  //         }
  //       </header>
  //     </div>
  //   );
  // }else{
  //   return (
  //     <div className="App">
  //       nothing here
  //     </div>
  //   );
  // }

  return <div className="App">
    <header className="App-header">
    {todoItems.length >0 && todoItems.map((item, index) =>
      <TodoItem key={index} val={item}></TodoItem>
    )}
    {todoItems.length == 0 && 'nothing here'}
    </header>
  </div>
}

export default App;
