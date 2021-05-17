import React, { useState,useEffect  } from 'react';
import './comon.css';
import className from 'classnames';

var trafficLight = [
    {color: 'green', time: 4000},
    {color: 'yellow', time: 3000},
    {color: 'red', time: 500},
];

function TodoItem(props) {
    var [currentColor, setCurrentColor] = useState('red');
    useEffect(() => {
        let index = trafficLight.findIndex(item => item.color === currentColor);
        var d = 0;
        if(index !== trafficLight.length -1) {
            d = index+1;
        } else {
            d = 0;
        }
        const inter = setInterval(()=>{
            setCurrentColor(trafficLight[d].color);
        }, trafficLight[d].time);
        return () => clearInterval(inter);
      });

  return (
    <div className="todoItems">
        <div className="traffic-light">
            Traffic Light:
            <div className={className('light', 'green',{
            active: currentColor === 'green'
            })}></div>
            <div className={className('light', 'yellow',{
                active: currentColor === 'yellow'
            })}></div>
            <div className={className('light', 'red',{
                active: currentColor === 'red'
            })}></div>
        </div>
    </div>
  );
}

export default TodoItem;
