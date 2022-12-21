import "../Styles/header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const Header = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  }

  return (
    <div className='header'>
      <div className="header-container">
        <a href="/"><h2>Onni.</h2></a>
        <ul className="big-screen-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-icon">
          <button onClick={handleClick}>
            <MenuIcon></MenuIcon>
          </button>
        </div>
        {isVisible && <ul className="small-screen-menu">
          <li><a onClick={handleClick} href="#about">About</a></li>
          <li><a onClick={handleClick} href="#skills">Skills</a></li>
          <li><a onClick={handleClick} href="#projects">Projects</a></li>
          <li><a onClick={handleClick} href="#contact">Contact</a></li>
        </ul>}
      </div>
    </div>
  );
};

export default Header;
