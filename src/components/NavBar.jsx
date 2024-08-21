import '../assets/styles/NavBar.scss';

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navBarLogo">
          <a href="#">Portfolio</a>
        </div>
        <input type="checkbox" id="check" className="checkbox" />
        <div className="opcionesNavbar">
          <li><a href="#principal">Sobre mi</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#title-project">Proyectos</a></li>
          <li><a href="#footer">Contacto</a></li>

          <label htmlFor="check" className="closeMenu">
            <i className="fa-solid fa-xmark" style={{ color: "#AD974F" }}></i>
          </label>
        </div>

        <label htmlFor="check" className="openMenu">
          <i className="fa-solid fa-bars" style={{ color: "#AD974F" }}></i>
        </label>
      </nav>
    </header>
  );
}

export default NavBar;
