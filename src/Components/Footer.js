import "../Styles/footer.css";
import github_logo from "../Images/GitHub_Logo_White.png";
import linkedin_logo from "../Images/LI-Logo.png";

const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>
                <h2>Onni.</h2>
                <div className='copyright'>© Onni Virtanen</div>
                <img className="github-logo" src={github_logo} alt="github-logo" />
                <img src={linkedin_logo} alt="linkedin-logo"/>
            </div>
        </div>    
    )
}

export default Footer;