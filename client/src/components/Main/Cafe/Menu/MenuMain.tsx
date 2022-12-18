import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../../../app/hooks'
import Menu from './Menu'
import DessertsPage from './Pages/DessertsPage'
import DrinksPage from './Pages/DrinksPage'

const MenuMain = () => {

  const menu = useAppSelector(state => state.menu);
  console.log([...menu.drinks.hotDrinks, ...menu.drinks.coldDrinks]);
  

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Menu />} />
        {menu.desserts.map(item => <Route
          key={item.id}
          path={item.name.split(' ').join('')}
          element={<DessertsPage item={item} />} />)}
        {[...menu.drinks.hotDrinks, ...menu.drinks.coldDrinks].map(item => <Route
          key={item.id}
          path={item.title.split(' ').join('')}
          element={<DrinksPage item={item} />} />)}
      </Routes>
    </div>
  )
}

export default MenuMain