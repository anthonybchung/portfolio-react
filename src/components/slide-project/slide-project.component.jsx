import './slide-project.styles.scss';
import RobotProject from '../robot/robot-project.component';
import WhiteBoard from '../post-it/white-board.component';
import { Routes, Route, Link } from 'react-router-dom';

const SlideProject = () => {
  const project = [
    {
      name: 'Button Event',
      description: 'Inspired by the ruby ROBOT terminal project',
      linkTo: '/slide-project/robot/',
    },
    {
      name: 'Drag and Drop',
      description: 'Foundation of future card dragging projects',
      linkTo: 'slide-project/job',
    },
  ];
  const sideProjectButton = project.map((element, index) => (
    <Link to={element.linkTo} className="project-button" key={index}>
      <p>{element.name}</p>
      <p>{element.description}</p>
    </Link>
  ));
  return (
    <div className="slide-project">
      <div className="carousel">
        <Routes>
          <Route path="/slide-project/robot/" element={<RobotProject />} />
          <Route path="/slide-project/job/" element={<WhiteBoard />} />
        </Routes>
      </div>
      <div className="project-button-container">{sideProjectButton}</div>
    </div>
  );
};

export default SlideProject;
