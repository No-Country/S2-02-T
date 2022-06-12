import React from "react";
import "./Calculadora.css";



export default class Calculadora extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="display--flex f-dir-column align--center">
          <div>
            <h1>Calculadora de amortización de crédito</h1>
          </div>
          {/*Inputs o formulario */}
          <div className="calc-container">
            <form className="calc-form-mip">
              <label>
                <span>Monto del crédito</span>
                <input placeholder="$" />
              </label>
              <label>
                <span>Tasa de interes anual</span>
                <input placeholder="%" />
              </label>
              <div className="calc-form-mip__pea">
                <label>
                  <span>Plazo en años</span>
                  <input placeholder="$" />
                </label>
                {/* <div>
                  <div>+</div>
                  <div>-</div>
                </div> */}
              </div>
            </form>
            {/* RESULTADOS */}
            <div className="calc-container__results-container">
              <h1>Resultados</h1>
              <div className="calc-container__results">
                <div className="calc-container__result-r">
                  <span>Pago mensual</span>
                  <img src="calendar.svg" alt="" className="calc-container__result-r-img" />
                  <span className="calc-container__result-r__m">$482.02</span>
                </div>
                <div className="calc-container__result-r">
                  <span>Intereses totales</span>
                  <img src="coins.svg" alt="" className="calc-container__result-r-img" />
                
                  <span className="calc-container__result-r__m">$1568.50</span>
                </div>
                <div className="calc-container__result-r">
                  <span>Pago total</span>
                  <img src="money.svg" alt="" className="calc-container__result-r-img" />
                  <span className="calc-container__result-r__m">$11,568.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
