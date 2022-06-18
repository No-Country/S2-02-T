import React from "react";
import "./Calculadora.css";

class Calculadora extends React.Component {
  render() {
    return (
      <>
        <div className="display--flex f-dir-column align--center" id="calculadora">
          <div>
            <h1 className="calc-general-title">Calculadora de amortización de crédito</h1>
          </div>
          {/*Inputs o formulario */}
          <div className="calc-container">
            <form className="calc-form-mip">
              <label>
                <span>Monto del crédito</span>
                <input type="number" placeholder="" id="monto_inicial" />
              </label>

              <label>
                <span>Tasa de interes anual</span>
                <input type="number" placeholder="" id="tasa_interes" />
              </label>

              <label>
                <span>Plazo en años</span>
                <input type="number" placeholder="" id="plazo_anos" />
              </label>
            </form>
            {/* RESULTADOS */}
            <div className="calc-container__results-container">
              <div className="calc-container__results-container__div-title">
                <h1>Resultados</h1>
              </div>

              <div className="calc-container__results">
                <div className="calc-container__result-r">
                  <span>Pago mensual</span>
                  <img
                    src="calendar.svg"
                    alt=""
                    className="calc-container__result-r-img"
                  />
                  <span
                    className="calc-container__result-r__m"
                    id="pago_mensual"
                  ></span>
                </div>

                <div className="calc-container__result-r">
                  <span>Intereses totales</span>
                  <img
                    src="coins.svg"
                    alt=""
                    className="calc-container__result-r-img"
                  />

                  <span
                    className="calc-container__result-r__m"
                    id="intereses_totales"
                  ></span>
                </div>

                <div className="calc-container__result-r">
                  <span>Pago total</span>
                  <img
                    src="money.svg"
                    alt=""
                    className="calc-container__result-r-img"
                  />
                  <span
                    className="calc-container__result-r__m"
                    id="pago_total"
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <br /><br /><br />
        </div>
      </>
    );
  }
  hola = 0;
  componentDidMount() {
    document
      .getElementById("monto_inicial")
      .addEventListener("input", calcular);
    document.getElementById("tasa_interes").addEventListener("input", calcular);
    document.getElementById("plazo_anos").addEventListener("input", calcular);

    function calcular() {
      var monto_inicial = parseInt(
        document.getElementById("monto_inicial").value
      );
      var tasa_interes = parseInt(
        document.getElementById("tasa_interes").value
      );
      var plazo_anos = parseInt(document.getElementById("plazo_anos").value);

      if (
        (monto_inicial < 0 || monto_inicial > 0) &&
        (tasa_interes < 0 || tasa_interes > 0) &&
        (plazo_anos < 0 || plazo_anos > 0)
      ) {
        console.log(monto_inicial);
        console.log(tasa_interes);
        console.log(plazo_anos);
        tasa_interes = tasa_interes / 100;
        //calculo de interes
        var total_a_pagar =
          monto_inicial + monto_inicial * tasa_interes * plazo_anos;
        var total_intereses = total_a_pagar - monto_inicial;
        plazo_anos = plazo_anos * 12;
        var pago_mensual = total_a_pagar / plazo_anos;
        var str_total_a_pagar = total_a_pagar.toFixed(2);
        var str_total_intereses = total_intereses.toFixed(2);
        var str_pago_mensual = pago_mensual.toFixed(2);
        //seteo de valores PRIMER CAMBIO EN VEZ DE VALUE VA TEXTCONTENT
        document.getElementById("pago_mensual").textContent =
          "$ " + str_pago_mensual;
        document.getElementById("intereses_totales").textContent =
          "$ " + str_total_intereses;
        document.getElementById("pago_total").textContent =
          "$ " + str_total_a_pagar;
        console.log("cambioooosuwuuwuwuu");
      }
    }
  }
}

export default Calculadora;
