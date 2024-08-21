import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer id="footer">
      <h4>Desarrollador Web</h4>
      <p>Apasionado por el desarrollo Front-end, siempre busco la mejor manera de satisfacer las necesidades de aquellos clientes que desean una web creativa, funcional y óptima para sus servicios.</p>

      <div className="socialMediaFooter" data-aos="zoom-in">
        <a href="https://github.com/SebasRojasM1" target="_blank">
          <img className="iconContact" src="img/icons/github-logo.svg" alt="github-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/sebastianrojasmarin/" target="_blank">
          <img className="iconContact" src="img/icons/linkedin-logo.svg" alt="linkedin-icon"/>
        </a>
        <a href="mailto:Sebasrojasm1@gmail.com" target="_blank">
          <img className="iconContact" src="img/icons/email-icon.svg" alt="email-icon"/>
        </a>
      </div>

      <div className="copyright">
        <p>Derechos reservados 2024 © Sebastián Rojas.</p>
      </div>
    </footer>
  );
}

export default Footer;
