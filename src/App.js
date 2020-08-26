import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <h1>Jotter.</h1>
        <div class="input-container">
          <input
            type="text"
            onChange={getInput}
            value={inputString}
            onKeyPress={checkKey}
          />
          <button onClick={addItem}>
            <AiOutlinePlusSquare />
          </button>
        </div>
        <div className="card-container">
          {inputData.length > 0
            ? inputData.map((item) => {
                return (
                  <div className="card">
                    <p>{item}</p>
                    <button
                      onClick={() => deleteItem(inputData.indexOf(item))}
                      onKeyPress={addItem}
                    >
                      <FaTrash />
                    </button>
                  </div>
                );
              })
            : ""}
        </div>
      </header>
    </div>
  );
}

export default App;
