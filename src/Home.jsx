import React from 'react';
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