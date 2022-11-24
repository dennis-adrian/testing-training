import React, { useState } from 'react';

const AddLanguage = ({ handleAddLanguage }) => {
  const initialState = '';
  const [inputValue, setInputValue] = useState(initialState);

  const handleClick = () => {
    handleAddLanguage(inputValue);
    setInputValue(initialState);
  };

  return (
    <>
      <input
        name="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button name="addButton" onClick={() => handleClick()}>
        Add
      </button>
    </>
  );
};

export default AddLanguage;
