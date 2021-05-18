import { Children } from 'react';
import './comon.css';

function Child(props) {
    console.log(props);
  const { heading, content, children } = props;
  return (
    <div className="children">
      <h1>{heading}</h1>
      <div className="content">
          {content} <br/>
          {children}
        </div>
    </div>
  );
}

export default Child;
