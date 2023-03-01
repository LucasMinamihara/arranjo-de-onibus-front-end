import { useState } from "react";
import classes from "./Header.module.css";

function Header() {
  const [responsaveis, setResponsaveis] = useState(false);
  const [informacoes, setInformacoes] = useState(false);
  const [areaRestrita, setAreaRestrita] = useState(false);

  return (
    <>
      <nav className={classes.container}>
        <div>Arranjo Congregação Liberdade</div>

        <ul className={classes.flex}>
          <li>
            <a href="#" onClick={() => setResponsaveis(true)}>
              Responsáveis
            </a>
            {responsaveis && <></>}
          </li>
          <li>
            <a href="#" onClick={() => setInformacoes(true)}>
              Informações
            </a>
            {informacoes && <></>}
          </li>
          <li>
            <a href="#" onClick={() => setAreaRestrita(true)}>
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
