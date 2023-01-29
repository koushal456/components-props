import Card from "./components/Card";
import { cardData } from "./CardData";
import "./App.css";

function App() {
  return (
    <div className="product">
      <div className="product_grid">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            price={card.price}
            img={card.image}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
