import React, { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    console.log("Generating a new password");
    const newPassword = PasswordGenerator.generatePassword();
    console.log("Password generated");
    setPassword(newPassword);
  };

  return (
    <div class="main">
  <title_h1>Generador de contraseñas</title_h1>
  <div class="password-generator-container">
    <button class="password-generator-button" onClick={generatePassword}>Generar contraseña</button>
    <p class = "password-generator-password">{password}</p>
  </div>
</div>
  );
}

export default App;
