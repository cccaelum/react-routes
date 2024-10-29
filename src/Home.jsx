// import React from 'react'; ya no hace falta importar react aqui
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Portfolio - Desarrollador web</h1>
      <nav>
      <Link to="/projects">Proyectos</Link> | 
      <Link to="/resume"> Currículum</Link>
    </nav>
    </>
  );
}

export default Home;