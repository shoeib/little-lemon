function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We serve fresh Mediterranean cuisine with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/hero.jpg" alt="Restaurant dish" />
      </div>
    </section>
  );
}

export default Hero;