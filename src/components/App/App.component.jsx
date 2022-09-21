import './App.styles.scss';
import NavBar from '../nav-bar/nav-bar.component';
import SlideProject from '../slide-project/slide-project.component';
import WorkExperience from '../work-experience/work-experience.component';
import WhiteBoard from '../post-it/white-board.component';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <SlideProject />
      <WorkExperience />
      <WhiteBoard />
    </div>
  );
}

export default App;
