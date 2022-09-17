import './slide-project.styles.scss';
const SlideProject = () => {
  const project = ['robot', 'slider', 'pomodoro', 'something else'];
  const sideProjectButton = project.map((element) => (
    <div className="project-button">{element}</div>
  ));
  return (
    <div className="slide-project">
      <div className="carousel"></div>
      <div>{sideProjectButton}</div>
    </div>
  );
};

export default SlideProject;
