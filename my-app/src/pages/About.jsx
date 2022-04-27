import React from 'react';
import image1 from '../assets/img/man.png'
import image2 from '../assets/img/founder.png'
import image3 from '../assets/img/manager.png'

const About = () => {
  return (

      <div className='container'>

            <div className='first'>
              <img src={image1} alt="" className='img'/> 

          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus incidunt modi suscipit amet itaque nemo delectus harum voluptatem sed expedita.
             </div> <br />


             <div className='first'>
              <img src={image2} alt="" className='img2'/> 

          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus incidunt modi suscipit amet itaque nemo delectus harum voluptatem sed expedita.
             </div> <br />

             <div className='first'>
              <img src={image3} alt="" className='img'/> 

          <br /><br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus incidunt modi suscipit amet itaque nemo delectus harum voluptatem sed expedita.
             </div> 
    </div>


  )
}

export default About
