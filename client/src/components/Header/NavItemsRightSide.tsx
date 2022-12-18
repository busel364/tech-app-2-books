import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
    item:{
        img:string,
        route:string
    }
}

const NavItemsRightSide = ({item}:Props) => {
  return (
    <Link to={item.route}>
        <img className='headerImg mx-2 mt-2 pt-1'
        title={item.route}
        src={item.img}
        alt={item.route}/>
    </Link>
  )
}

export default NavItemsRightSide