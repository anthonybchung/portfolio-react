import './slide-project.styles.scss';
import RobotProject from '../robot/robot-project.component';

const SlideProject = () => {
  const project = ['robot', 'slider', 'pomodoro', 'something else'];
  const sideProjectButton = project.map((element, index) => (
    <div className="project-button" key={index}>
      {element}
    </div>
  ));
  return (
    <div className="slide-project">
      <div className="carousel">
        <RobotProject />
      </div>
      <div className="project-button-container">{sideProjectButton}</div>
    </div>
  );
};

export default SlideProject;
