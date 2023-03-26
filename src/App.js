import "./App.css";
import classes from "./components/Container.module.css";

import { useState } from "react";

import Formulario from "./components/Formulario";
import Header from "./components/Header";
import MostrarLista from "./components/MostrarLista";

function App() {
  const [responsaveis, setResponsaveis] = useState(false);
  const [informacoes, setInformacoes] = useState(false);
  const [areaRestrita, setAreaRestrita] = useState(false);

  return (
    <>
    <div className="background-image-blur"></div>
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
          <div className={classes.container}>
            <MostrarLista />
            <Formulario />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
