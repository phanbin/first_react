import './comon.css';

function TodoItem(props) {
  const { val, handleEvent } = props;
    let className = 'TodoItem';
    if(val.isComplete){
        className += ' complete-item';
    }
  return (
    <div className={className}>
      <p onClick={handleEvent}>{val.title}</p>
    </div>
  );
}

export default TodoItem;
