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
                            <h3>FullStack Exercises</h3>
                            <a rel="noreferrer" target="_blank" href="https://github.com/OnniVirtanen/FullStack-HY"> <img className='git-image' src={image_git} alt="git"/></a>
                        </div>
                        <p>There are exercises that I have completed while doing Helsinki University's Full Stack Development course. I have not yet finished the whole course. You could see my thinking process by viewing some of the code.
                        </p>
                        <div className='tech-used'>
                            <ul>
                                <li>
                                    React
                                </li>
                                <li>
                                    Node.js
                                </li>
                                <li>
                                    Express
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