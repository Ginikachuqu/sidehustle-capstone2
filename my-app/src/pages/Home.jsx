import React from 'react'
import imageHeader from '../assets/img/food-g57a58cc4f_1920-removebg-preview.png'

const Home = () => {
  return (
    <header className="header">
       <div className="headerContent">    
            <h2 id="heading">
                Are you hungry?
            </h2>
            <article id="header_article">
                Don't wait.
            </article>
            <div class="link">
                <p> Order now </p>
            </div>
        </div>         
        <img id="intro_img" src={imageHeader} alt="" />
    </header>
  )
}

export default Home
