import "../Styles/footer.css";
import github_logo from "../Images/GitHub_Logo_White.png";
import linkedin_logo from "../Images/LI-Logo.png";

const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>
                <h2>Onni.</h2>
                <div className='copyright'>© Onni Virtanen</div>
                <a href="https://www.linkedin.com/in/onni-virtanen-63566b254/"><img className="github-logo" src={github_logo} alt="github-logo" /></a>
                <a href="https://github.com/OnniVirtanen"><img src={linkedin_logo} alt="linkedin-logo"/></a>
            </div>
        </div>    
    )
}

export default Footer;