import React, { useState, useEffect } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import styled from "styled-components";

import Note from "./components/Note";

function App() {
  const [inputString, setInputString] = useState("");
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("mydata")) {
      setInputData(JSON.parse(localStorage.getItem("mydata")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mydata", JSON.stringify(inputData));
  }, [inputData]);

  const getInput = (input) => {
    input.preventDefault();
    setInputString(input.target.value);
  };

  const addItem = () => {
    setInputData([inputString, ...inputData]);
    setInputString("");
  };

  const deleteItem = (index) => {
    let temp = inputData.slice();
    temp.splice(index, 1);
    setInputData(temp);
  };

  const checkKey = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  return (
    <AppContainer>
      <div className="section">
        <div className="hero">
          <h1 className="title is-size-1 is-centered">Jotter.</h1>
          <div class="input-container">
            <input
              className="input is-large"
              type="text"
              onChange={getInput}
              value={inputString}
              onKeyPress={checkKey}
            />
            <button onClick={addItem} className="button">
              <AiOutlinePlusSquare />
            </button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="note-container">
            {inputData.length > 0 &&
              inputData.map((item) => {
                return (
                  <Note
                    bodyText={item}
                    deleteItem={() => deleteItem(inputData.indexOf(item))}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-family: "Gloria Hallelujah", cursive;

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .input-container {
    display: flex;
  }

  .note-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

export default App;
