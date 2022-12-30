import "../Styles/header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  }

  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;


  return (
    <div className='header'>
      <div className="header-container">
        <Link onClick={() => scroll.scrollToTop()}><h2>Onni.</h2></Link>
        <ul className="big-screen-menu">
          <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
          <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
          <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
        </ul>
        <div className="menu-icon">
          <button onClick={handleClick}>
            <MenuIcon></MenuIcon>
          </button>
        </div>
        {isVisible && <ul className="small-screen-menu">
          <li><Link onClick={handleClick} to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
          <li><Link onClick={handleClick} to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
          <li><Link onClick={handleClick} to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
          <li><Link onClick={handleClick} to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
        </ul>}
      </div>
    </div>
  );
};

export default Header;
