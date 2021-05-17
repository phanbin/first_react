import './comon.css';

function TodoItem(props) {
    console.log(props);
    let className = 'TodoItem';
    if(props.val.isComplete){
        className += ' complete-item';
    }
  return (
    <div className= {className}>
      <p>{props.val.title}</p>
    </div>
  );
}

export default TodoItem;
