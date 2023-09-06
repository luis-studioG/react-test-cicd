import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { render } from 'react-dom'
// window.React = React;

export const App = (): JSX.Element => {
  const { REACT_APP_BUSINESS_COUNTRY } = process.env;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>
          Learning AWS CodeBuild and CodeDeploy - {REACT_APP_BUSINESS_COUNTRY}
        </h1>
      </header>
    </div>
  );
};

export default App;
