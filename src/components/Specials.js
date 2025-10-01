import greekSaladImg from "../assets/greek-salad.jpg";
import bruschettaImg from "../assets/bruschetta.png";
import lemonDessertImg from "../assets/lemon-dessert.jpg";

function Specials() {
  return (
    <section className="specials" id="specials">
      <h2>Specials</h2>
      <div className="specials-grid">
        <article>
          <img src={greekSaladImg} alt="Greek Salad" className="specials-img" />
          <h3>Greek Salad</h3>
          <p>Fresh vegetables, feta cheese, and olives.</p>
        </article>
        <article>
          <img src={bruschettaImg} alt="Bruschetta" className="specials-img" />
          <h3>Bruschetta</h3>
          <p>Grilled bread with tomato, basil, and olive oil.</p>
        </article>
        <article>
          <img src={lemonDessertImg} alt="Lemon Dessert" className="specials-img" />
          <h3>Lemon Dessert</h3>
          <p>Sweet and tangy lemon delight.</p>
        </article>
      </div>
    </section>
  );
}

export default Specials;