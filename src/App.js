import React from "react";
import "./styles.css";
import { ApplicationRoutes } from "./components/ApplicationRoutes";
import { Link } from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favoritos</Link>
        </header>
        <ApplicationRoutes />
      </div>
    );
  }
}
