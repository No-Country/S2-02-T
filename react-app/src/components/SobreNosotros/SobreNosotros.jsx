import React from "react";
import "./SobreNosotros.css";

class SobreNosotros extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
              <div className="col-md-10">
              <br /><br />
                <h1>Sobre Nosotros - <small className="text-muted">Equipo S2-02-T: </small></h1>
                <div className="container"><br/>
                  <div className="row">
                <div className="col-md-4">
                  <div className="card">
                      <img className="card-img-top" src="paulo_nievas.jfif" alt="perfil"/>
                      <div className="card-body">
                      <h5 className="card-title text-xl-center">Paulo Nievas - Backend</h5>
                      <div className="row">
                      <div className="col"></div>
                        <div className="col">
                          <a href="https://www.linkedin.com/in/paulo-facundo-gaston-nievas/" target="_blank"><img src="linkedin.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col">
                            <a href="https://github.com/F4cku23" target="_blank"><img src="github.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col"></div>
                      </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card">
                      <img className="card-img-top" src="orlando_neris.jfif" alt="perfil"/>
                      <div className="card-body">
                      <h5 className="card-title text-xl-center">Orlando - Backend</h5>
                      <div className="row">
                      <div className="col"></div>
                        <div className="col">
                          <a href="https://www.linkedin.com/in/orlandoneris823/" target="_blank"><img src="linkedin.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col">
                            <a href="https://github.com/OlandoNeris" target="_blank"><img src="github.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col"></div>
                      </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card">
                      <img className="card-img-top" src="oscar_ruiz.jfif" alt="perfil"/>
                      <div className="card-body">
                      <h5 className="card-title text-xl-center">Oscar - Backend</h5>
                      <div className="row">
                      <div className="col"></div>
                        <div className="col">
                          <a href="https://www.linkedin.com/in/oscar-ruiz-7a3371171/" target="_blank"><img src="linkedin.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col">
                            <a href="https://github.com/dert98" target="_blank"><img src="github.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col"></div>
                      </div>
                      </div>
                  </div>
              </div>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="container"><br/>
                  <div className="row">
                  <div className="col-2"></div>
                <div className="col-md-4">
                  <div className="card">
                      <img className="card-img-top" src="julian_perna.jfif" alt="perfil"/>
                      <div className="card-body">
                      <h5 className="card-title text-xl-center">Julian - Frontend</h5>
                      <div className="row">
                      <div className="col"></div>
                        <div className="col">
                          <a href="https://www.linkedin.com/in/julián-perna-5b7508136/" target="_blank"><img src="linkedin.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col">
                            <a href="https://github.com/julianperna" target="_blank"><img src="github.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col"></div>
                      </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card">
                      <img className="card-img-top" src="richard_irala.jfif" alt="perfil"/>
                      <div className="card-body">
                      <h5 className="card-title text-xl-center">Richard - Frontend</h5>
                      <div className="row">
                      <div className="col"></div>
                        <div className="col">
                          <a href="https://www.linkedin.com/in/richard-miguel-irala-5139a2217/" target="_blank"><img src="linkedin.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col">
                            <a href="https://github.com/RichardIrala" target="_blank"><img src="github.png" alt="" className=" position-relative"/></a>
                        </div>
                        <div className="col"></div>
                      </div>
                      </div>
                  </div>
              </div>
              
              </div>
              <div className="col-2"></div>
            </div>


          </div>
        </div>
        <br /><br /><br />
        </div>
      </>
    );
  }

  componentDidMount() {
    
      }
}


export default SobreNosotros;
