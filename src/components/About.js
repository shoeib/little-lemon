import adrian from '../assets/adrian.jpg';
import mario from '../assets/mario.jpg';

function About() {
  return (
    <section className="about">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Adrian and Mario bring Mediterranean flavors to life.</p>
      </div>
      <div className="about-images">
        <img src={adrian} alt="Adrian" />
        <img src={mario} alt="Mario" />
      </div>
    </section>
  );
}

export default About;