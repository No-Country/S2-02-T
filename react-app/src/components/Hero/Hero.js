import "./styles.css"

const Hero = () => {
  return (  
    <>
    <div class="hero__container">
    <h1 className="hero__title">Gastify App</h1>
    <p className="hero__subtitle">La mejor calculadora para simular tus gastos. Facil y rapido!
    </p>
    <div className="hero__button">Probar</div>
    <div className="hero__image">
      <img  src="landing.png" alt="" />
    </div>
    <div className="hero__circle">
    </div>

    </div>
    </>
  );
}
 
export default Hero;