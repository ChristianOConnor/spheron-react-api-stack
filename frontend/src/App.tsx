import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

function App() {
  const [resp, setResp] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  async function callApi() {
    const url = `${process.env.REACT_APP_API_URL}/hello`;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ switchBool: isToggled })
  };
    const helloStream = await fetch(url, requestOptions);
    const helloText = await helloStream.text();
    setResp(helloText as string);
  }
  console.log(isToggled);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Spheron-React-API-Stack
        </h2>
        <p>
          This is a test of experimental code
        </p>
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <ToggleSwitch toggledVal={isToggled} setToggled={setIsToggled} />
      <br />
      <br />
      <div className="card">
        <button onClick={() => callApi()}>click this to call API</button>
        <p>{resp}</p>
      </div>
    </div>
  );
}

export default App;