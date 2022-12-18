import React, { useEffect, useState } from 'react'
import { navItems, navItemsRightSide } from '../../utils/consts';
import NavItemsLeftSide from './NavItemsLeftSide';
import NavItemsRightSide from './NavItemsRightSide';

const Header = () => {


    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > 600) {
                setVisible(() => prevScrollPos > currentScrollPos);
                setPrevScrollPos(currentScrollPos);
            }
        });
    }, [prevScrollPos])

    return (
        <div className={visible ? 'header' : 'header headerHidden'}>
            <div className='row'>
                <div className='headerLeftSide text-uppercase col-5 row row-cols-4 pt-3 text-center'>
                    {navItems.map((item, index) => <NavItemsLeftSide item={item} index={index} key={item.name} />)}
                </div>
                <div className='headerRightSide col-2 offset-5'>
                    {navItemsRightSide.map(item => <NavItemsRightSide item={item} key={item.route} />)}
                </div>
            </div>
        </div>
    )
}

export default Header