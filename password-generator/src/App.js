import React, { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const newPassword = PasswordGenerator.generatePassword();
    setPassword(newPassword);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generador de contraseñas</h1>
        <button onClick={generatePassword}>Generar contraseña</button>
        <div className="password">{password}</div>
      </header>
      <footer className="App-footer">
        <p>Desarrollado por Andres</p>
      </footer>
    </div>
  );
}

export default App;
