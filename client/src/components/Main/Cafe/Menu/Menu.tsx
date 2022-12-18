import React from 'react'
import { menuDrinks } from '../../../../utils/consts';
import MenuDesserts from './MenuDesserts';
import MenuDrinks from './MenuDrinks';

const Menu = () => {


    return (
        <div className='container-fluid row mt-5 menuMainBlock mx-0 px-0'>
            <h1 className='text-center mt-5'>Menu</h1>
            <div className='row'>
                {menuDrinks.map(item=><MenuDrinks item={item} key={item.indexName}/>)}
            </div>
            <div className='mt-5'>
                <MenuDesserts/>
            </div>
        </div>
    )
}

export default Menu