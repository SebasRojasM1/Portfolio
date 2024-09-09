import '../assets/styles/Skills.scss';
import cssIcon from "../assets/img/icons/css-logo.svg"
import sassIcon from "../assets/img/icons/sass-logo.svg"
import javascriptIcon from "../assets/img/icons/javascript-logo.svg"
import typescriptIcon from "../assets/img/icons/typescript-logo.png"
import reactIcon from "../assets/img/icons/react-logo.svg"
import nestJsIcon from "../assets/img/icons/nestjs-logo.png"
import nextJsIcon from "../assets/img/icons/nextjs-logo.png"
import NodeJsIcon from "../assets/img/icons/node-js-logo.png"
import GitIcon from "../assets/img/icons/git-logo.svg"
function Skills() {
    return (
        <section className="skillsContainer" id="skills" data-aos="zoom-in">
            <h2>Mis Skills</h2>
            <div className="skills">
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                        <img src={cssIcon} alt="CSS Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://sass-lang.com/documentation/" target="_blank">
                        <img src={sassIcon} alt="SASS Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <img src={javascriptIcon} alt="JavaScript Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://www.typescriptlang.org/docs/" target="_blank">
                        <img src={typescriptIcon} alt="TypeScript Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://react.dev/" target="_blank">
                        <img src={reactIcon} alt="React Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://nextjs.org/docs" target="_blank">
                        <img src={nextJsIcon} alt="NextJs Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://docs.nestjs.com/" target="_blank">
                        <img src={nestJsIcon} alt="NestJs Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://nodejs.org/docs/latest/api/" target="_blank">
                        <img src={NodeJsIcon} alt="NodeJs Icon" />
                    </a>
                </div>
                <div>
                    <a href="https://git-scm.com/doc" target="_blank">
                        <img src={GitIcon} alt="Git Icon" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Skills;




