import adrian from '../assets/adrian.jpg';
import mario from '../assets/mario.jpeg';

function About() {
  return (
    <section className="about">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Adrian and Mario bring Mediterranean flavors to life with a modern twist.
          Their passion for fresh, authentic ingredients defines the Little Lemon experience.
        </p>
      </div>

      <div className="about-images">
        <div className="image-card card1">
          <img src={adrian} alt="Adrian" />
        </div>
        <div className="image-card card2">
          <img src={mario} alt="Mario" />
        </div>
      </div>
    </section>
  );
}

export default About;