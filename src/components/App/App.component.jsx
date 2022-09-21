import './App.styles.scss';
import NavBar from '../nav-bar/nav-bar.component';
import SlideProject from '../slide-project/slide-project.component';
import WorkExperience from '../work-experience/work-experience.component';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <SlideProject />
      <WorkExperience />
    </div>
  );
}

export default App;
