import './robot-project.styles.scss';
import Robot from './car-top-view-svgrepo-com.svg';
import { useState } from 'react';

const RobotProject = () => {
  const cellArray = Array(25).fill('cell');
  const cells = cellArray.map(() => <div className="cell"></div>);

  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, f: 0 });

  let xPos = 4 + robotPosition.x * 50;
  let yPos = 205 - robotPosition.y * 50;
  let robotStyle = {
    marginTop: `${yPos}px`,
    marginLeft: `${xPos}px`,
    transform: `rotate(${robotPosition.f}deg)`,
  };

  const leftHandler = () => {
    const newDirection = robotPosition.f - 90;
    setRobotPosition((prev) => ({ ...prev, f: newDirection }));
  };

  const rightHandler = () => {
    const newDirection = robotPosition.f + 90;
    setRobotPosition((prev) => ({ ...prev, f: newDirection }));
  };

  const moveHandler = () => {
    const currentDirection = robotPosition.f % 360;
    const move = {
      0: [0, 1],
      90: [1, 0],
      180: [0, -1],
      270: [-1, 0],
    };

    let newX = robotPosition.x + move[currentDirection][0];
    let newY = robotPosition.y + move[currentDirection][1];
    if (newX >= 0 && newX < 5)
      setRobotPosition((prev) => ({ ...prev, x: newX }), []);
    if (newY >= 0 && newY < 5)
      setRobotPosition((prev) => ({ ...prev, y: newY }), []);
    console.log(robotPosition);
  };

  return (
    <div className="robot-table">
      <img
        className="robot-size"
        src={Robot}
        alt="robot"
        style={robotStyle}
      ></img>
      {cells}
      <button onClick={leftHandler}>Left</button>
      <button onClick={moveHandler}>Move</button>
      <button onClick={rightHandler}>Right</button>
    </div>
  );
};

export default RobotProject;
