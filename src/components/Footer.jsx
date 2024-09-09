import '../assets/styles/Footer.scss';
import githubLogo from "../assets/img/icons/github-logo.svg"
import linkedinLogo from "../assets/img/icons/linkedin-logo.svg"
import emailLogo from "../assets/img/icons/email-icon.svg"

function Footer() {
  return (
    <footer id="footer">
      <div className='navegation'>
          <a href="#principal">Sobre mi</a>
          <a href="#skills">Skills</a>
          <a href="#titleProject">Proyectos</a>
      </div>

      <div className="socialMediaFooter" data-aos="zoom-in">
        <a href="https://github.com/SebasRojasM1" target="_blank">
          <img className="iconContact" src={githubLogo} alt="github-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/sebastianrojasmarin/" target="_blank">
          <img className="iconContact" src={linkedinLogo} alt="linkedin-icon"/>
        </a>
        <a href="mailto:Sebasrojasm1@gmail.com" target="_blank">
          <img className="iconContact" src={emailLogo} alt="email-icon"/>
        </a>
      </div>

      <div className="copyright">
        <p>Hecho por <span>@SebasRojasM1</span> | 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
