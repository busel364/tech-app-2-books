import React from 'react'
import { Link } from 'react-router-dom'
import { Drinks } from '../../../../utils/types'

interface Props {
  item: Drinks
}

const DisplayDrinks = ({ item }: Props) => {
  return (
    <div className='row displayDrinks pt-4 text-center'>
      <Link className='col-3 text-start linkDrinks' to={`/menu/${item.title.split(' ').join('')}`}>{item.title}</Link>
      <div className='col-6'></div>
      <p className='col-3'>{item.price.displayValue} {item.price.currency}</p>
    </div>
  )
}

export default DisplayDrinks