import './nav-bar.styles.scss';

const NavBar = () => {
  const logo = 'ABChungSTACK';
  const menu = ['Side Project', 'Work Experience', 'Contact Me'];

  const menuList = menu.map((element, index) => (
    <h5 className="nav-item" key={index}>
      {element}
    </h5>
  ));
  return (
    <div className="nav-bar">
      <h5 className="nav-item">{logo}</h5>
      <div className="nav-menu">{menuList}</div>
    </div>
  );
};

export default NavBar;
