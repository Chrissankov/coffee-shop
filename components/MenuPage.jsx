import CoffeeItem from "./CoffeeItem";
import data from "../data";

const coffee = data.map((item) => {
  return <CoffeeItem key={item.id} {...item} />;
});

export default function Menu() {
  return (
    <div className="menu">
      <h2 className="menu--title">Menu/Hot Coffees</h2>
      <div className="menu--item">{coffee}</div>
    </div>
  );
}
