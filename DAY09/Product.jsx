import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='conatiner'>
      <h2>Product main page</h2>
     <div className='d-felx felx-row'>
        <NavLink to="Product1" className="p-2">Product 1</NavLink>
        <NavLink to="Product2" className="p-2">Product 2</NavLink>
        <NavLink to="Product3" className="p-2">Product 3</NavLink>
     </div>
     <Outlet/>
    </div>
  )
}

export default Product
