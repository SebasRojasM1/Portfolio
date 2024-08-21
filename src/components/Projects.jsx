import '../assets/styles/Projects.scss';

function Projects() {
    return (
        <section>
            <h2 id="titleProject">Proyectos</h2>
            
            <section className="projects" id="projects">
                <div className="card">
                    <figure>
                        <img src="img/SS-Projects/APIestudiantesRiwi.png" alt="API Estudiante Gosling" />
                    </figure>

                    <div className="cardContent">
                        <h2>API Estudiante Gosling</h2>

                        <a href="https://sebasrojasm1.github.io/APIEstudiantesGosling/" target="_blank" className="readMore">
                            Ir al proyecto
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Projects;
