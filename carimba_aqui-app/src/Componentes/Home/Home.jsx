import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const locations = [
    { id: 1, name: "Location 1", image: "imagem1.jpg" },
    { id: 2, name: "Location 2", image: "imagem2.jpg" },
    { id: 3, name: "Location 3", image: "imagem3.jpg" },
    // Adicione informações para as outras 13 imagens
  ];

  return (
    <div className="home-container">
      <div className="image-container">
        <img className="background-image" alt="Background" src="/assets/01home.jpg" />
        <div className="overlay"></div>
        <div className="text-container">
          <h1 className="title">CARIMBA AQUI: PERNAMBUCO NA PALMA DA SUA MÃO</h1>
          <p className="description-home">
            Explore, carimbe e viva a essência de Pernambuco, um destino cheio de histórias para contar.
          </p>
        </div>
      </div>

      <div className="info-container">
        <div className="logo-container">
          <img className="logo" alt="Logo" src="/assets/logosobre.png" />
        </div>
        <div className="about-container">
          <h1 className="about-title" >
            Sobre
          </h1>
          <p className="about-description">
            Carimba Aqui foi criado com o intuito de mostrar em uma jornada única os pontos de carimbo do 
            “Passaporte Pernambuco” para se conectar com a autenticidade do nosso País Pernambuco.
            Descubra endereços encantadores, sabores irresistíveis e histórias que só Pernambuco tem.
          </p>
          <p>
            Carimba Aqui é a chave para explorar, viver e se apaixonar por tudo que Pernambuco oferece.
          </p>
          <p>
            #PernambucoCarimbaAqui
          </p>
        </div>
      </div>

      <div className="centered-text">
        <h1 className="highlight-text">Conheça os pontos de carimbo</h1>
        <p className="subtext">
          Clica nos cards e vem descobrir mais sobre esses lugares arretados desse país
        </p>
      </div>

      <div className="card-container">
        {locations.map((location) => (
          <Link key={location.id} to={`/location/${location.id}`}>
            <div className="card">
              <img src={`/assets/${location.image}`} alt={location.name} />
              <div className="card-overlay">
                <p className="card-label">{location.name}</p>
                <button className="card-button">Saiba mais</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
