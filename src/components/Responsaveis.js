import classes from "./Responsaveis.module.css";

function Responsáveis(props) {
  function fecharModal() {
    props.setResponsaveis(false);
  }

  return (
    <>
      <div className={classes.overlay} onClick={fecharModal}></div>
      <div className={classes.modal}>
        <span className={classes.fechar} onClick={fecharModal}>
          X
        </span>
        <h3>Responsáveis pelo arranjo</h3>
        <div className={classes.container}>
          <div className={classes.infLucas}>
            <div>
              <strong>Lucas Minamihara</strong>
            </div>
            <div>(11) 96347-7191</div>
            <div>Lucas.hmds@outlook.com</div>
          </div>
          <div className={classes.infRafael}>
            <div>
              <strong>Rafael Mariano</strong>
            </div>
            <div>(11) 95346-9129</div>
            <div>rafael@vincius.html</div>
          </div>
          <div className={classes.infFernando}>
            <div>
              <strong>Fernando Felix</strong>
            </div>
            <div>(11) 93489-1231</div>
            <div>FernandoFelix@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Responsáveis;
