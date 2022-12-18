import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import DisplayDesserts from './DisplayDesserts'

const MenuDesserts = () => {

    const desserts = useAppSelector(state=>state.menu.desserts)

  return (
    <div>
        <h2 className='text-center'>Desserts</h2>
        {desserts.map(item=><DisplayDesserts item={item} key={`${item.id}+${item.name}`}/>)}
    </div>
  )
}

export default MenuDesserts