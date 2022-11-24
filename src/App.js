import React, { useState } from 'react';
import './App.css';
import AddLanguage from './components/AddLanguage';
import ShowLanguages from './components/ShowLanguages';

function App() {
  const [languages, setLanguages] = useState([]);

  const handleAddLanguage = (language) => {
    const newState = [...languages, language];
    setLanguages(newState);
  };

  return (
    <div className="App">
      <AddLanguage handleAddLanguage={handleAddLanguage} />
      <ShowLanguages languages={languages} />
    </div>
  );
}

export default App;
