import coffeeImage from "../images/pablo-merchan-montes-_Tw4vCs9C-8-unsplash 1.png";

export default function Main() {
  return (
    <div className="main">
      <div className="main--1">
        <div className="main--border"></div>
        <img className="main--image" src={coffeeImage} alt="Coffee Cup" />
      </div>

      <div className="main--2">
        <h2 className="main--title">Fuel Your Day with Our Perfect Brew</h2>
        <p className="main--paragraph">
          Start your day with the energy and warmth of a perfectly crafted cup
          of coffee. Our expertly roasted beans are hand-selected from the
          finest sources, ensuring that every sip is smooth, rich, and full of
          flavor.<br></br>Whether you're gearing up for a busy day or need a
          midday pick-me-up, our coffee is brewed to fuel your passion and keep
          you going. Come in for a cup and experience the perfect blend that
          turns ordinary moments into extraordinary ones.
        </p>
        <button className="main--button">Order Now</button>
      </div>
    </div>
  );
}
