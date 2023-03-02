import { useState } from "react";
import classes from "./AreaRestrita.module.css";
import AreaRestritaRegistrarFormulario from "./AreaRestritaRegistrarFormulario";
import FormularioAreaRestrita from "./FormularioAreaRestrita";

function AreaRestrita(props) {
  const [registrar, setRegistrar] = useState(false);

  function fecharModal() {
    props.setAreaRestrita(false);
  }

  return (
    <>
      <div className={classes.overlay} onClick={fecharModal}></div>
      {!registrar && (
        <div className={classes.container}>
          <FormularioAreaRestrita fecharModal={fecharModal} />
          <button
            onClick={(e) => setRegistrar(true)}
            className={classes.botaoRegistrar}
          >
            Clique aqui para registrar
          </button>
        </div>
      )}
      {registrar && (
        <div className={classes.container}>
          <AreaRestritaRegistrarFormulario
            fecharModal={fecharModal}
            setRegistrar={setRegistrar}
          />
        </div>
      )}
    </>
  );
}

export default AreaRestrita;
