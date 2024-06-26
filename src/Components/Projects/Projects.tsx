import React, { useRef } from 'react';
import './Projects.css';
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import company from "../../assets/company_design3.jpg";
import library from "../../assets/library.jpg";
import garden1 from "../../assets/external_garden.jpg";
import garden2 from "../../assets/external_garden2.jpg";
import house from "../../assets/house2.jpg";

const Projects = () => {

    const slider = useRef<HTMLUListElement | null>(null);
    let tx = 0;

    //back & next btn slide
    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        if (slider.current) {
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        if (slider.current) {
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }
    
  return (
    <section className='container'>
        <section className="intro-text">
            <h1>Projetos Recentes</h1>
            <p>Descubra a potência do concreto e a sofisticação do design Brutalista</p>
        </section>
        <section className="Projects">
            {/* icons */}
            <img src={next_icon} alt="next icon" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="back icon" className='back-btn' onClick={slideBackward}/>

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="project-info">
                                <img src={house} alt="House project" />
                                <div>
                                    <h2>Barueri, SP</h2>
                                    <p>Design de Interior</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="project-info">
                                <img src={garden1} alt="A external garden project for companies" />
                                <div>
                                    <h2>Oldest House</h2>
                                    <p>Projeto de arquitetura de design exterior para empresa</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="project-info">
                                <img src={library} alt="Private library project" />
                                <div>
                                    <h2>Liminar Space</h2>
                                    <p>Projeto de design de biblioteca particular.</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="project-info">
                                <img src={company} alt="Company design project" />
                                <div>
                                    <h2>Faria Lima</h2>
                                    <p>Projeto de arquitetura para empresa</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="project-info">
                                <img src={garden2} alt="A external garden project for companies" />
                                <div>
                                    <h2>Bureau of Control</h2>
                                    <p>Projeto de arquitetura de design exterior para empresa</p>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    </section>
  )
}

export default Projects