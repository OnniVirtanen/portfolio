import "../Styles/skills.css";

const Skills = () => {
    return (
        <div className='container'>
            <div className="ellipse3"></div>
            <div className='skills'>
                <h2 class="animate__animated animate__fadeIn" id="skills">Skills</h2>
                <div className='skills-flex-container'>
                    <div className='skill-container'>
                        <h3>JavaScript</h3>
                        <p>
                        I have a strong foundation in JavaScript and am proficient in using the React library to build basic web applications.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>Full Stack</h3>
                        <p>
                        I am in the process of learning Full Stack development and building my skills and experience in this field. I am currently learning Node.js and Express.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>Python</h3>
                        <p>
                        I am proficient in Python and have extensive experience using its cryptographic libraries.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>C</h3>
                        <p>
                        I have a foundation in C programming and am familiar with the basic concepts and syntax.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>Linux</h3>
                        <p>
                        I am well-versed in Linux operating systems, with a solid foundation in the subject from a Linux course at a university of applied sciences and practical experience using multiple distributions.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>APIs</h3>
                        <p>
                        I am familiar with the principles of API development and have successfully implemented them in my work. I have experience on Node.js and Express.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>HTML & CSS</h3>
                        <p>
                        I have a strong background in HTML and CSS, with experience designing and building web pages with these languages.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>Other</h3>
                        <p>
                        I have some past experience with Java, but it has been a few years since I last worked with the language. I have experience using Figma and Adobe XD for designing web layouts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;