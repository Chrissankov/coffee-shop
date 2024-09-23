export default function CoffeeItem(props) {
  return (
    <div className="item">
      <img
        src={`../images/${props.image}`}
        alt="Coffee Image"
        className="item--image"
      />
      <div className="item--imageMARGINdata">
        <h3 className="item--name">{props.name}</h3>
        <p className="item-calories">{props.calories}</p>
        <button className="item--button">Add to Order</button>
      </div>
    </div>
  );
}
