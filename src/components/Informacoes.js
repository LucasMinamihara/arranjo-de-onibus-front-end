import classes from "./Informacoes.module.css";

function Informacoes(props) {
  function fecharModal() {
    props.setInformacoes(false);
  }
  return (
    <>
      <div className={classes.overlay} onClick={fecharModal}></div>
      <div className={classes.container}>
        <span className={classes.fechar} onClick={fecharModal}>
          X
        </span>
        <p>
          A congregação Liberdade possui arranjos para todos que necessitam de
          ônibus para estarem presente em nossos congressos e/ou assembléia.
        </p>
        <p>
          O valor de cada passagem é de <strong>R$27.18</strong> por pessoa,
          sempre que necessário alguns ajustes serão efetuados de acordo com o
          valor cobrado pela empresa de transporte.
        </p>
        <p>
          Precisamos que os prazos sejam cumpridos, sendo assim, contamos com a
          colaboração de todos para efetuarem o pagamento.
        </p>
        <p>
          O arranjo pode ser pago tanto de forma física como de forma virtual
          por meio de pix.
        </p>
        <p>
          Assim que seu pagamento for efetuado, você receberá uma confirmação
          pelo e-mail e sempre que digitar o seu e-mail terá acesso a lista dos
          passageiros do ônibus.
        </p>
      </div>
    </>
  );
}

export default Informacoes;
