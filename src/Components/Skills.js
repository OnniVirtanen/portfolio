import "../Styles/skills.css";

const Skills = () => {
    return (
        <div className='container'>
            <div className="ellipse3"></div>
            <div className='skills'>
                <h2 id="skills">Skills</h2>
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
                        I am in the process of learning Full Stack development and building my skills and experience in this field.
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
                        I have experience working with APIs, including a program that fetches data from an electricity price API and sorts the cheapest hours of the day.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>HTML & CSS</h3>
                        <p>
                        I have a strong background in HTML and CSS, with experience designing and building web pages using these technologies.
                        </p>
                    </div>
                    <div className='skill-container'>
                        <h3>Other</h3>
                        <p>
                        Familiar with Java and experienced with Figma design software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;