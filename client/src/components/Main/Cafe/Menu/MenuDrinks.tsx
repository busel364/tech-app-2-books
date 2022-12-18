import React, { useRef } from 'react'
import { useAppSelector } from '../../../../app/hooks';
import Drinks from './DisplayDrinks';

interface Props {
    item: {
        name: string,
        indexName: string
    }
}

const MenuDrinks = ({ item }: Props) => {

    const drinks = useAppSelector(state => state.menu.drinks);

    return (
        <div className='col-md-12 col-lg-6'>
            <h2 className='text-center'>
                {item.name}
            </h2>
            <div className=''>
                {item.indexName === 'hotDrinks' ? 
                drinks.hotDrinks.map(item => <Drinks item={item} key={`${item.title}+${item.id}`} />) :
                    drinks.coldDrinks.map(item => <Drinks item={item} key={`${item.title}+${item.id}`} />)}
            </div>
        </div>
    )
}

export default MenuDrinks