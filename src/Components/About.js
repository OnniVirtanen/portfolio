import "../Styles/about.css";
import "../Styles/container.css";
import 'animate.css';

const About = () => {
    return (
        <div className='container'>
            <div className="ellipse2"></div>
            <div className='about'>
                <h2 class="animate__animated animate__fadeIn" id="about">About</h2>
                <p>
                    I am currently studying a Bachelor's degree of ICT in Finland.
                    I believe that my ability to think critically and solve problems 
                    efficiently is one of my key strengths, and I am drawn to entrepreneurship.
                </p>
                <p>
                    In my free time, I take pleasure in engaging in outdoor activities such
                    as hiking and exploring nature. 
                    I also have a keen interest in programming and computer science, 
                    which I regularly practice to improve my skills.
                </p>
            </div>
        </div>
    )
}

export default About;