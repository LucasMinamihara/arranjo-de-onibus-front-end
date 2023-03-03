import "./App.css";

import { useState } from "react";

import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [responsaveis, setResponsaveis] = useState(false);
  const [informacoes, setInformacoes] = useState(false);
  const [areaRestrita, setAreaRestrita] = useState(false);

  return (
    <div className="App">
      <Header
        responsaveis={responsaveis}
        setResponsaveis={setResponsaveis}
        informacoes={informacoes}
        setInformacoes={setInformacoes}
        areaRestrita={areaRestrita}
        setAreaRestrita={setAreaRestrita}
      ></Header>

      {responsaveis || informacoes || areaRestrita ? (
        console.log("nothing!")
      ) : (
        <Formulario />
      )}
    </div>
  );
}

export default App;
