import "./styles.css"

const Hero = () => {
  return (
    <>
      <div className="hero__container">
        <h1 className="hero__title">Digital Finance</h1>
        <p className="hero__subtitle">La mejor calculadora para simular tus gastos. Facil y rápido!</p>
        <div className="hero__button">Probar</div>
        <div className="hero__image">
          <img className="hero__calculator" src="calcu-money.jpeg" alt="" />
        </div>
        <div className="hero__circle"></div>
        <div className="hero__circle hero__circle--yellow"></div>
        <div className="hero__circle hero__circle--turquoise"></div>
        <div className="hero__circle hero__circle--lightblue"></div>
      </div>
    </>
  );
}
 
export default Hero;