import { useState } from "react";
import classes from "./Header.module.css";
import Responsáveis from "./Responsaveis";
import Informacoes from "./Informacoes";

function Header() {
  const [responsaveis, setResponsaveis] = useState(false);
  const [informacoes, setInformacoes] = useState(false);
  const [areaRestrita, setAreaRestrita] = useState(false);

  function abrirResponsaveis(e) {
    e.preventDefault();
    setResponsaveis(true);
  }

  function abrirInformacoes(e) {
    e.preventDefault();
    setInformacoes(true);
  }

  function abrirAreaRestrita(e) {
    e.preventDefault();
    setAreaRestrita(true);
  }

  return (
    <>
      <nav className={classes.container}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.bus}
            viewBox="0 0 20 20"
          >
            <path d="M13 18H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zM4 5v6h5V5H4zm7 0v6h5V5h-5zM5 2v1h10V2H5zm.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
          Arranjo Congregação Liberdade
        </div>

        <ul className={classes.flex}>
          <li>
            <a href="#" onClick={abrirResponsaveis}>
              Responsáveis
            </a>
            {responsaveis && (
              <Responsáveis setResponsaveis={setResponsaveis}></Responsáveis>
            )}
          </li>
          <li>
            <a href="#" onClick={abrirInformacoes}>
              Informações
            </a>
            {informacoes && (
              <Informacoes setInformacoes={setInformacoes}></Informacoes>
            )}
          </li>
          <li>
            <a href="#" onClick={abrirAreaRestrita}>
              Área Restrita
            </a>
            {areaRestrita && <></>}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
