import React from "react";
import image1 from "../assets/img/man.png";
import image2 from "../assets/img/founder.png";
import image3 from "../assets/img/manager.png";

const About = () => {

  
  return (
    <section className="about__section">
      <div className="about__section-container">
        <div className="box box__1">
          <div className="employee__details">
            <div className="image__container" style={{backgroundImage: `url(${image1})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
            <div className="employee__name"><h2>James Alehandro</h2> <p>CEO</p></div>
          </div>
          <div className="employee__bio">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              provident asperiores sapiente eum explicabo illo.
            </p>
          </div>
        </div>
        <div className="box box__2">
          <div className="employee__details">
            <div className="image__container" style={{backgroundImage: `url(${image2})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
            <div className="employee__name"><h2>Rhoda Aramide</h2> <p>Co-founder</p></div>
          </div>
          <div className="employee__bio">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam error facilis sunt, vero atque commodi aliquam. Veniam nemo suscipit cum, voluptatum qui quae possimus sit perferendis nisi, odio consectetur ad.
            </p>
          </div>
        </div>
        <div className="box box__3">
          <div className="employee__details">
            <div className="image__container" style={{backgroundImage: `url(${image3})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
            <div className="employee__name"><h2>Emily Rotherfield</h2> <p>Co-founder</p></div>
          </div>
          <div className="employee__bio">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              quos eligendi animi autem quibusdam eos ducimus iusto quidem rem
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
