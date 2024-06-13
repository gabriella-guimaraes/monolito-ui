import React from 'react';
import "./Company.css";
import house from "../../assets/house.jpg";

const Company = () => {
  return (
    <section className='container'>
        <section className="content-wrapper">
            <section className="left-col">
                <img src={house} alt="Projeto de arquitetura - casa" />
            </section>

            <section className="right-col">
                <h1>Construção Robusta, <br/>Design Refinado.</h1>
                <p>Com uma abordagem inovadora e um olhar atento aos detalhes, criamos espaços que se destacam pela sua solidez 
                e pela sua estética única. Cada projeto é uma fusão harmoniosa entre forma e função, projetado para proporcionar 
                uma experiência arquitetônica inigualável.</p>
            </section>
        </section>

        <section className="infos">
            <div className="info">
                <h2>1.5K</h2>
                <p>Contratos</p>
            </div>
            <div className="info">
                <h2>Localização</h2>
                <p>São Paulo, Brasil</p>
            </div>
            <div className="info">
                <h2>Experiência</h2>
                <p>Mais de 10 anos de experiência</p>
            </div>
        </section>
        
    </section>
  )
}

export default Company