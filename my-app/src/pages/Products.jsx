import React from "react";
import image1 from '../assets/img/bun-4284019_1920.jpg'
import image2 from '../assets/img/asparagus-2169305_1920.jpg'
import image3 from '../assets/img/burger-5893927_1280.jpg'
import image4 from '../assets/img/pizza-5107039_1920.jpg'
import image5 from '../assets/img/salmon-518032_1920.jpg'
import image6 from '../assets/img/cappuccino-756490_1920.jpg'
import image7 from '../assets/img/pasta-329522_1920.jpg'
import image8 from '../assets/img/pasta-712664_1920.jpg'
import image9 from '../assets/img/chicken-breast-fillet-2215709_1920.jpg'
import image10 from '../assets/img/salad-2150548_1920.jpg'
import image11 from '../assets/img/wings-2709068_1920.jpg'
import image12 from '../assets/img/salmon-2997240_1920.jpg'

const Products = () => {
  return (
    <section className="menu__container">
      <div className="container">
        <div className="meal__info">
          <div className="meal__image">
            <img src={image1} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Croissants
            </p>
            <span className="meal__desc-price">
              Price: $15
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image2} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Steaks
            </p>
            <span className="meal__desc-price">
              Price: $499
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image3} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Hamburger
            </p>
            <span className="meal__desc-price">
              Price: $23
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image4} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Pizza
            </p>
            <span className="meal__desc-price">
              Price: $50
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image5} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Salmon
            </p>
            <span className="meal__desc-price">
              Price: $99
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image6} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Cappuccino Coffee
            </p>
            <span className="meal__desc-price">
              Price: $5.65
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image7} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Italian Pasta
            </p>
            <span className="meal__desc-price">
              Price: $399
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image8} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Carbunaro Pasta
            </p>
            <span className="meal__desc-price">
              Price: $105.65
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image9} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Chicken Breast Fillet
            </p>
            <span className="meal__desc-price">
              Price: $85.65
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image10} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Lettuce Salad
            </p>
            <span className="meal__desc-price">
              Price: $99.99
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image11} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Chicken Wings
            </p>
            <span className="meal__desc-price">
              Price: $45.65
            </span>
          </div>
        </div>
        <div className="meal__info">
          <div className="meal__image">
            <img src={image12} alt="" />
          </div>
          <div className="meal__desc">
            <p className="meal__desc-name">
              Salmon Fillet
            </p>
            <span className="meal__desc-price">
              Price: $200.65
            </span>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Products;
