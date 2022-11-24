import React from 'react';

const ShowLanguages = ({ languages }) => {
  return (
    <ul>
      {languages.length >= 0 &&
        languages.map((language) => {
          return <li key={language}>{language}</li>;
        })}
    </ul>
  );
};

export default ShowLanguages;
