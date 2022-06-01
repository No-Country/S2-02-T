import "./Steps.css";
import circuloTempSvg from "../imgs/circulo-temp.svg";
import calculadoraPng from "../imgs/calculadora.png";
export default function Steps() {
  const steps = [
    {
      stepNumber: "STEP 1",
      textcontent:
        "Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.",
    },
    {
      stepNumber: "STEP 2",
      textcontent:
        "Connect the device anywhere your home and turn it on. Then follow the guide given by the app to configure. Make sure your home WiFi is working well.",
    },
    {
      stepNumber: "STEP 3",
      textcontent:
        "After the configuration process is completed as per the app guide, you will be able to control your home applicance from anywhere remotely.",
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
        <h2>Install the device few easy steps</h2>
        <img
          className="steps-title-container__img"
          src={calculadoraPng}
          alt=""
          width="96px"
        />
      </div>
      <div>{addSteps()}</div>
    </div>
  );
}
