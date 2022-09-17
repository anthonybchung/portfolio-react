import './work-experience.styles.scss';

const WorkExperience = () => {
  const workExperience = [
    {
      period: '20191-present',
      company: 'Look Design and Digital Botany',
      position: 'Screen Printer',
    },
    {
      period: '2017-2019',
      company: 'dnata Airport Services Pty Ltd Mascot',
      position: 'Airport Service Agent Team Leader',
    },
    {
      period: '2000-2017',
      company: 'CV Alodia IndoJaya Indonesia',
      position: 'Production Manager',
    },
    {
      period: '1997-2000',
      company: 'Windtech, Wind Engineer Consultant',
      position: 'Wind Engineer',
    },
  ];

  const work = workExperience.map((element, index) => (
    <div className="work-card" key={index}>
      <ul>
        <li>{element.period}</li>
        <li>{element.company}</li>
        <li>{element.position}</li>
      </ul>
    </div>
  ));

  return (
    <div className="work-experience">
      <h1> Work Experience</h1>
      <div className="work-slide">{work}</div>
    </div>
  );
};

export default WorkExperience;
