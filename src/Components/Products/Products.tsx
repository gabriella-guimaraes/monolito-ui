import React from 'react';
import './Products.css';
import { AptoIcon } from '../icons/apto-icon';
import { CompanyIcon } from '../icons/company-icon';
import { HomeIcon } from '../icons/home-icon';
import apartment from "../../assets/apartment.jpg";
import company from "../../assets/company_design.jpg";
import house from "../../assets/interior_design.jpg";

const Products = () => {
  return (
    <>
        <div className='intro'>
            <h1 className='title'>Nossas Especialidades</h1>
            <p>Com uma abordagem inovadora e um olhar atento aos detalhes, criamos espaços que se destacam pela sua solidez e 
            pela sua estética única. Cada projeto é uma fusão harmoniosa entre forma e função, projetado para proporcionar uma 
            experiência arquitetônica inigualável.</p>
        </div>
        <div className='container Products'>
            <div className="product">
                <img src={house} alt="Design de interior para residências" />
                <div className="caption">
                    <HomeIcon />
                    <p>Design de Interiores</p>
                </div>
            </div>

            <div className="product">
                <img src={apartment} alt="Casas e Apartamentos planejados" />
                <div className="caption">
                    <AptoIcon />
                    <p>Casas e Apartamentos</p>
                </div>
            </div>

            <div className="product">
                <img src={company} alt="Projetos para Empresas" />
                <div className="caption">
                    <CompanyIcon />
                    <p>Projetos para Empresas</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Products;