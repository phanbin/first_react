import React, { useState,useEffect  } from 'react';
import './App.css';

import TodoItem from './components/todoItem';
// import TrafficLight from './components/trafficLight';

var todoList = [
  {title: 'item 1', isComplete: true},
  {title: 'item 2', isComplete: false},
  {title: 'item 3', isComplete: false},
  {title: 'item 4', isComplete: false}
];
function App() {
  const [todoItems, setToDoItems] = useState(todoList);
  function onItemClicked(val){
    const isComplete = val.isComplete;
    const index = todoItems.indexOf(val);
    setToDoItems([
      ...todoItems.slice(0,index),
      {
        ...val,
        isComplete: !isComplete
      },
      ...todoItems.slice(index+1)
    ]);
  }

  return <div className="App">
    <header className="App-header">
      <h1>To do list</h1> <button>sort</button>
      {todoItems.length >0 && todoItems.map((item, index) =>
        <TodoItem key={index} val={item} handleEvent={()=>onItemClicked(item)}></TodoItem>
      )}
      {todoItems.length == 0 && 'nothing here'}
    </header>
  </div>
}

export default App;
