import avatar from "../assets/avatar.jpg"; // adjust relative path
import avatar2 from "../assets/avatar-2.jpg"; // adjust relative path
import avatar3 from "../assets/avatar-3.jpg"; // adjust relative path
import avatar4 from "../assets/avatar-4.jpg"; // adjust relative path
import avatar5 from "../assets/avatar-5.jpg";
import avatar6 from "../assets/avatar-6.jpg";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        <article>
          <img
            src={avatar}
            alt="Sarah L."
            className="profile-pic"
          />
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>"Best food ever! Everything was fresh and full of flavor."</p>
          <h4>- Sarah L.</h4>
        </article>
        <article>
          <img
            src={avatar2}
            alt="James K."
            className="profile-pic"
          />
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>"Amazing atmosphere! Cozy and welcoming, perfect for a night out."</p>
          <h4>- James K.</h4>
        </article>
        <article>
          <img
            src={avatar3}
            alt="Maria P."
            className="profile-pic"
          />
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>"Friendly staff who made us feel right at home. Highly recommend."</p>
          <h4>- Maria P.</h4>
        </article>
        <article>
          <img
            src={avatar4}
            alt="Danielle R."
            className="profile-pic"
          />
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>"The desserts are incredible. The lemon cake was to die for!"</p>
          <h4>- Danielle R.</h4>
        </article>
        <article>
          <img
            src={avatar5}
            alt="Ahmed S."
            className="profile-pic"
          />
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>"Quick service and great prices. Definitely my new go-to spot."</p>
          <h4>- Ahmed S.</h4>
        </article>
        <article>
          <img
            src={avatar6}
            alt="Eddie W."
            className="profile-pic"
          />
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>"Perfect for family dinners. Everyone loved their meal."</p>
          <h4>- Eddie W.</h4>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;