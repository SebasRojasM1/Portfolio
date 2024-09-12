import '../assets/styles/Projects.scss';
import PortfolioSS from "../assets/img/SS-Projects/PortfolioSS.png"
import KGrillFusionSS from "../assets/img/SS-Projects/KGrillFusionSS.png"
import NotesSS from "../assets/img/SS-Projects/NotesSS.png"
import ecomusECommerceSS from "../assets/img/SS-Projects/ecomusECommerce.png"
import leBelleAventureSS from "../assets/img/SS-Projects/LeBelleAventure.png"

import htmlIcon from "../assets/img/icons/html-icon.svg"
import cssIcon from "../assets/img/icons/css-logo.svg"
import sassIcon from "../assets/img/icons/sass-logo.svg"
import javascriptIcon from "../assets/img/icons/javascript-logo.svg"
import typescriptIcon from "../assets/img/icons/typescript-logo.png"
import tailwindIcon from "../assets/img/icons/tailwind-logo.png"
import reactIcon from "../assets/img/icons/react-logo.svg"
import nestJsIcon from "../assets/img/icons/nestjs-logo.png"
import nextJsIcon from "../assets/img/icons/nextjs-logo.png"
import mongodbIcon from "../assets/img/icons/mongodb-logo.png"
import angularIcon from "../assets/img/icons/angular-icon.webp"

function Projects() {
    return (
        <section>
            <h2 id="titleProject">Proyectos</h2>
            
            <section className="projects" id="projects">
                <a className="card" href='#'>
                    <figure>
                        <img src={PortfolioSS} alt="Portfolio page" />
                    </figure>

                    <div className="cardContent">
                        <h2>Portafolio</h2>

                        <div className='container-icons'>
                            <img src={reactIcon} alt="React Icon" />
                            <img src={sassIcon} alt="SASS Icon" />
                        </div>
                    </div>
                </a>

                <a className="card" href='#'>
                    <figure>
                        <img src={KGrillFusionSS} alt="KGrill Fusion page" />
                    </figure>

                    <div className="cardContent">
                        <h2>KGrill Fusion</h2>

                        <div className='container-icons'>
                            <img src={htmlIcon} alt="HTML Icon" />
                            <img src={cssIcon} alt="CSS Icon" />
                            <img src={javascriptIcon} alt="JavaScript Icon" />
                        </div>
                    </div>
                </a>

                <a className="card" href='#'>
                    <figure>
                        <img src={NotesSS} alt="Notes APP page" />
                    </figure>

                    <div className="cardContent">
                        <h2>Notes APP</h2>

                        <div className='container-icons'>
                            <img src={nextJsIcon} alt="NextJs Icon" />
                            <img src={typescriptIcon} alt="TypeScript Icon" />
                            <img src={tailwindIcon} alt="Tailwind Icon" />
                            <img src={nestJsIcon} alt="NestJs Icon" />
                            <img src={mongodbIcon} alt="MongoDB Icon" />
                        </div>
                    </div>
                </a>

                <a className="card" href='#'>
                    <figure>
                        <img src={ecomusECommerceSS} alt="ecoumus ECommerce page" />
                    </figure>

                    <div className="cardContent">
                        <h2>Ecoumus ECommerce APP </h2>

                        <div className='container-icons'>
                            <img src={nextJsIcon} alt="NextJs Icon" />
                            <img src={typescriptIcon} alt="TypeScript Icon" />
                            <img src={tailwindIcon} alt="Tailwind Icon" />
                        </div>
                    </div>
                </a>

                <a className="card" href='#'>
                    <figure>
                        <img src={leBelleAventureSS} alt="Le Belle Aventure page " />
                    </figure>

                    <div className="cardContent">
                        <h2>Le Belle Aventure APP Gallery</h2>

                        <div className='container-icons'>
                            <img src={angularIcon} alt="Angular14 Icon" />
                            <img src={typescriptIcon} alt="TypeScript Icon" />
                            <img src={sassIcon} alt="SASS Icon" />
                            <img src={tailwindIcon} alt="Tailwind Icon" />
                        </div>
                    </div>
                </a>
            </section>
        </section>
    );
}

export default Projects;
