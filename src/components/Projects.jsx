import '../assets/styles/Projects.scss';
import PortfolioSS from "../assets/img/SS-Projects/PortfolioSS.png"
import KGrillFusionSS from "../assets/img/SS-Projects/KGrillFusionSS.png"
import NotesSS from "../assets/img/SS-Projects/NotesSS.png"
import pokemonPageSS from "../assets/img/SS-Projects/pokemon-page.png"
import leBelleAventureSS from "../assets/img/SS-Projects/LeBelleAventure.png"
import userManagementSS from "../assets/img/SS-Projects/user-management.png"

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

                <a className="card" href='#' target='_blank'>
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

                <a className="card" href='https://my-notes-three-iota.vercel.app/' target='_blank'>
                    <figure>
                        <img src={NotesSS} alt="MyNotes APP"/>
                    </figure>

                    <div className="cardContent">
                        <h2>MyNotes APP</h2>

                        <div className='container-icons'>
                            <img src={nextJsIcon} alt="NextJs Icon" />
                            <img src={typescriptIcon} alt="TypeScript Icon" />
                            <img src={tailwindIcon} alt="Tailwind Icon" />
                            <img src={nestJsIcon} alt="NestJs Icon" />
                            <img src={mongodbIcon} alt="MongoDB Icon" />
                        </div>
                    </div>
                </a>

                <a className="card" href='https://pokemon-page-two.vercel.app/' target='_blank' >
                    <figure>
                        <img src={pokemonPageSS} alt="Pokemon page" />
                    </figure>

                    <div className="cardContent">
                        <h2>Pokemon APP </h2>

                        <div className='container-icons'>
                            <img src={reactIcon} alt="ReactJs Icon" />
                            <img src={sassIcon} alt="NextJs Icon" />
                            <img src={typescriptIcon} alt="TypeScript Icon" />
                            <img src={tailwindIcon} alt="Tailwind Icon" />
                        </div>
                    </div>
                </a>
                
                <a className="card" href='https://user-management-cyan-seven.vercel.app' target='_blank'>
                    <figure>
                        <img src={userManagementSS} alt="User Management" />
                    </figure>

                    <div className="cardContent">
                        <h2>User Management APP</h2>

                        <div className='container-icons'>
                            <img src={angularIcon} alt="Angular14 Icon" />
                            <img src={typescriptIcon} alt="TypeScript Icon" />
                            <img src={sassIcon} alt="SASS Icon" />
                            <img src={nestJsIcon} alt="NestJs Icon" />
                            <img src={mongodbIcon} alt="MongoDB Icon" />
                            <img src={tailwindIcon} alt="Tailwind Icon" />
                        </div>
                    </div>
                </a>

                <a className="card" href='https://gallery-three-swart.vercel.app/' target='_blank'>
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
