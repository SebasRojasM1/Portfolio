import '../assets/styles/Skills.scss';

function Skills() {
    return (
        <section className="skillsContainer" id="skills" data-aos="zoom-in">
            <h2>Mis Skills</h2>
            <div className="skills">
                <div>
                    <a href="#">
                        <img src="img/icons/html-icon.svg" alt="HTML Icon" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="img/icons/css-logo.svg" alt="CSS Icon" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="img/icons/javascript-logo.svg" alt="JavaScript Icon" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="img/icons/react-logo.svg" alt="React Icon" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="img/icons/sass-logo.svg" alt="Sass Icon" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src="img/icons/git-logo.svg" alt="Git Icon" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Skills;




