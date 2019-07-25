import React, { useState } from 'react';

const UseLocalStorage = () => {
  const [title, setTitle] = useState("Hooks are sooooo fucking annoying!");
  const [inputText, setInputText] = useState("");

  const handleChanges = event => {
    setInputText(event.target.value);
  };

  const changeTitle = event => {
    event.preventDefault();
    setTitle(inputText);
    setInputText("");
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">{title}</h1>
      <form onSubmit={changeTitle}>
        <div className="Input">
          <inputText
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handleChanges}
            placeholder="Create new title"
            type="text"
            value={inputText}
          />
          <label htmlFor="input" className="Input-label">
            New title
          </label>
        </div>
      </form>
    </div>
  );
};

export default UseLocalStorage;
