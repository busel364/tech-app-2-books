import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import CardBack from './CardBack'
import CardMain from './CardMain'

const Card = () => {

    const cardMainSide = useAppSelector(state=>state.card.cardMainSide)

  return (
    <div className='my-5 py-5 shopItemPage bookSeat container text-center'>
    {cardMainSide ? <CardMain /> : <CardBack />}
    </div>
  )
}

export default Card