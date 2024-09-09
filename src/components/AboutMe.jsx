import '../assets/styles/AboutMe.scss';

import githubLogo from "../assets/img/icons/github-logo.svg"
import linkedinLogo from "../assets/img/icons/linkedin-logo.svg"
import emailLogo from "../assets/img/icons/email-icon.svg"
import retrato from "../assets/img/retrato.png"

function AboutMe() {
    return (
        <section className="principal" id="principal">
            <div className="infoPrincipal">
                <p>Bienvenido/a</p>
                <h1>Soy Sebastián Rojas.</h1>
                <p>
                    Como desarrollador web front-end, me especializo en crear código limpio
                    y diseños perfectos. Con experiencia en la creación webs atractivas,
                    brindo interactividad a cada proyecto. Mi enfoque en el diseño
                    responsivo garantiza accesibilidad en todos los dispositivos.
                </p>

                <div>
                    <a href="https://github.com/SebasRojasM1" target="_blank">
                        <img className="iconContact" src={githubLogo} alt="github-icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/sebastianrojasmarin/" target="_blank">
                        <img className="iconContact" src={linkedinLogo} alt="linkedin-icon" />
                    </a>

                    <a href="mailto:Sebasrojasm1@gmail.com" target="_blank">
                        <img className="iconContact" src={emailLogo} alt="email-icon" />
                    </a>
                </div>

                <a id="aboutBoton" href="#skills"> Ver skills </a>
            </div>

            <div className="photoPrincipal">
                <img src={retrato} alt="" />
            </div>
        </section>
    );
}

export default AboutMe;
