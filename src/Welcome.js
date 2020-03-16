import React from "react";

function Welcome({ gender, name }) {
  switch (gender) {
    case "male":
      return <h1> Bem-vindo, {name} !</h1>;
    case "female":
      return <h1> Bem-vinda, {name} !</h1>;
    default:
      return <h1> Bem-vindo</h1>;
  }
}

export default Welcome;
