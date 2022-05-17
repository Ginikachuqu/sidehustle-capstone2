import React from 'react'
import { useParams } from 'react-router-dom'
import logo from '../imgs/logo.jpg'

const Productdetails = ({ items }) => {
  console.log(items)

  const { name, price } = useParams()


  return (

    <div className='detailscover'>
      <div className='detailscont'>

        <div>
          <img src={logo} alt="" class="logoimg" />
        </div><br />

        <div className='description'>
          <p> {name} </p><br />
          <p> {price} </p>
        </div>


      </div>

    </div>




  )
}

export default Productdetails