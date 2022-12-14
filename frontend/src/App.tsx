import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [resp, setResp] = useState("");

  async function callApi() {
    const url = `${process.env.REACT_APP_API_URL}/hello`;
    const helloStream = await fetch(url);
    const helloText = await helloStream.text();
    setResp(helloText as string);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="card">
        <button onClick={() => callApi()}>click this to call API</button>
        <p>{resp}</p>
      </div>
    </div>
  );
}

export default App;
