import "./About.css";
import about1 from "./assets/images/chaire.jpg";
import about2 from "./assets/images/bureau2.jpg";

const About = () => {
  return (
    <section className="about-container">
      {/* Grand Titre avec Animation */}
      <h1 className="about-title">ABOUT US</h1>

      {/* Conteneur principal des images + texte */}
      <div className="about-content">
        <div className="about-item">
          <img src={about1} alt="Our Vision" className="about-image" />
          <p>
            <strong className="quick">Quick Annonce</strong> is the fastest way to post and find ads. We aim to simplify the process 
            and make transactions easier and safer for everyone.
          </p>
        </div>

        <div className="about-item">
          <img src={about2} alt="Our Mission" className="about-image" />
          <p>
           <strong> Our mission</strong> is to provide a secure and user-friendly platform for people to buy and sell 
            with confidence, no matter where they are.
          </p>
        </div>
      </div>

      {/* Paragraphe en dessous des images */}
      {/* <div className="about-footer">
        <p>
            <strong>      Whether you're looking to sell your products or find the best deals, Quick Annonce is here for you. 
            With thousands of ads posted daily, we connect people instantly and efficiently.</strong>
        </p>
        <p>
           Join us today and experience a smooth, secure, and powerful way to buy and sell online!
        </p>
      </div> */}
    </section>
  );
};

export default About;
