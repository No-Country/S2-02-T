import React from "react";
import "./SobreNosotros.css";

class SobreNosotros extends React.Component {
  render() {
    return (
      <>
        <h1>Sobre Nosotros - <small class="text-muted">Equipo: </small></h1>

        <div class="social">
          <ul>
            
            <li><a href="mailto:contacto@falconmasters.com" class="icon-mail"></a></li>
          </ul>
      </div>
      </>
    );
  }

  componentDidMount() {
    
      }
}


export default SobreNosotros;
