import React from 'react';
import { studies, experiences } from './data/resume';

const Resume = () => (
    <>
      <h1>Currículum</h1>
      <section>
        <h2>Experiencia Laboral</h2>
        <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h3>{experience.title}</h3>
            <p>
              {experience.company} - {experience.date}
            </p>
          </li>
        ))}
      </ul>
      </section>
  
      <section>
        <h2>Estudios</h2>
        <ul>
        {studies.map((study) => (
          <li key={study.id}>
            <h3>{study.title}</h3>
            <p>
              {study.institution} - {study.date}
            </p>
          </li>
        ))}
      </ul>
      </section>
    </>
  );
  
  export default Resume;