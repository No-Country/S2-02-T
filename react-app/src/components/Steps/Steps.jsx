import "./Steps.css";
import circuloTempSvg from "../imgs/circulo-temp.svg";
import calculadoraPng from "../imgs/calculadora.png";
export default function Steps() {
  const steps = [
    {
      stepNumber: "PASO 1",
      textcontent:
        "Primero colocas el monto del credito que necesitas.",
    },
    {
      stepNumber: "PASO 2",
      textcontent:
        "Colocas la taza de interes anual que se aplicara.",
    },
    {
      stepNumber: "PASO 3",
      textcontent:
        "Por ultimo colocas el tiempo en años del credito, y listo! ya podes visualizar los importes de manera automatica y rapida! ",
    },
  ];
  function addSteps() {
    const allSteps = steps.map((step) => {
      return (
        <div className="steps-container">
          <div>
            <img src={circuloTempSvg} alt="" width="96px" />
          </div>
          <div className="steps-cont__div--txtctnt">
            <h3>{step.stepNumber}</h3>
            <p>{step.textcontent}</p>
          </div>
        </div>
      );
    });
    return allSteps;
  }
  //El componente funcional retornado es el siguiente
  return (
    <div className="steps-all-content-container">
      <div className="steps-title-container">
        
        <img
          className="steps-title-container__img"
          src="note_calc_manos.jpg"
          alt=""
        />
      </div>
      <div>{addSteps()}</div>
    </div>
  );
}
