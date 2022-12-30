import "../Styles/projects.css";
import image_git from "../Images/github-mark-white.svg";

const Projects = () => {
    return (
        <div className='container'>
            <div className='projects'>
                <h2 class="animate__animated animate__fadeIn" id="projects">Projects</h2>
                <div className='projects-flex-container'>
                    <div className='projects-flex-item'>
                        <div className='projects-flex-item-header-and-git'>
                            <h3>Encryption tool</h3>
                            <a rel="noreferrer" target="_blank" href="https://github.com/OnniVirtanen/VionCrypt"><img className='git-image' src={image_git} alt="git"/></a>
                        </div>
                        <p>I have created a file encryption tool in Python that can be run through the command line interface. 
                            The tool utilizes a tag to verify the authenticity of the file and incorporates a nonce to ensure that the cipher is unique even if the key and file remain the same. 
                            This project was designed to address a real-world problem and allowed me to apply my programming skills in a practical setting.
                        </p>
                        <div className='tech-used'>
                            <ul>
                                <li>
                                    Python
                                </li>
                                <li>
                                    pycryptodome
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='projects-flex-item'>
                        <div className='projects-flex-item-header-and-git'>
                            <h3>Country API</h3>
                            <a rel="noreferrer" target="_blank" href="https://github.com/OnniVirtanen/FullStack-HY/tree/main/osa2/maiden_tiedot/my-app"><img className='git-image' src={image_git} alt="git"/></a>
                        </div>
                        <p>I have done exercise of a program that retrieves data from an API and displays it to the user based on their input. 
                            The program sorts the data and allows the user to specify which country's information should be displayed.
                            This project was completed as part of the Full Stack Open 2022 course and allowed me to practice implementing API calls and processing data in my program.
                        </p>
                        <div className='tech-used'>
                            <ul>
                                <li>
                                    React
                                </li>
                                <li>
                                    Axios
                                </li>
                                <li>
                                    REST API
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='projects-flex-item'>
                        <div className='projects-flex-item-header-and-git'>
                            <h3>Website Footer</h3>
                            <a rel="noreferrer" target="_blank" href="https://github.com/OnniVirtanen/WebsiteProjects/tree/main/Ableton_frontend"><img className='git-image' src={image_git} alt="git"/></a>
                        </div>
                        <p>I have created a fully responsive website footer using a pre-designed layout and focused on improving my skills with CSS grid and flexbox. 
                            The project idea was sourced from frontendpractice.com and allowed me to gain practical experience with responsive layouts.
                        </p>
                        <div className='tech-used'>
                            <ul>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='projects-flex-item'>
                        <div className='projects-flex-item-header-and-git'>
                            <h3>Password Generator</h3>
                            <a rel="noreferrer" target="_blank" href="https://github.com/OnniVirtanen/react-password-generator"><img className='git-image' src={image_git} alt="git"/></a>
                        </div>
                        <p>
                            I have created a React web application that generates a customizable password within the user's web browser. 
                            The user has the option to specify the password length and choose from various options,
                            including uppercase letters, lowercase letters, numbers, and symbols.
                        </p>
                        <div className='tech-used'>
                            <ul>
                                <li>
                                    React
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;