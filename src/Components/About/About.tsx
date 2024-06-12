import React from 'react';
import "./About.css";
// import { RightArrow } from '../icons/right_arrow';
import company from "../../assets/company_design2.jpg";
import interior from "../../assets/interior_design2.jpg";
import urban from "../../assets/urban_design.jpg";

const About = () => {
  return (
    <>
        <section className='container content-wrapper'>
            <section className='side-text'>
                <span>Monólito Arquitetura</span>
                <span>Quem nós somos</span>
            </section>

            <section className='About'>
                <section className="text">
                    <h1>Sobre nós</h1>
                    <h2>Você imagina, nós criamos.</h2>
                    <p>Na Monólito Arquitetura, acreditamos na força e na beleza do concreto. Somos uma empresa de arquitetura e 
                    design especializada na estética Brutalista, onde a robustez encontra a elegância. Nosso compromisso é transformar 
                    ideias em estruturas monumentais que não apenas resistem ao tempo, mas também inspiram e impressionam.</p>
                </section>

                <section className="images">
                    <div className="main-img">
                        <img src={urban} alt="urban design" />
                    </div>
                    <div className="secondary-img">
                        <img src={company} alt="company design" />
                        <img src={interior} alt="interior design" />
                    </div>
                </section>
            </section>
        </section>
        {/* <button>Mais Detalhes <RightArrow /></button> */}
    </>
  )
}

export default About;