import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import './BreadCrumb.css'
const BreadCrumb = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrumb