
import {MenuItem, MenuItems} from '../types'
import {FC, useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { ReactComponent as BurgerIcon} from '../assets/images/Burger.svg'
import { ReactComponent as CloseIcon} from '../assets/images/ExitBold.svg'
import { useLocation } from 'react-router-dom';

const DesktopMenu:FC<MenuItems> = ({menuItems}) => {
    return <div className="header-menu__wrapper desktop">
        <ul className="header-menu__list">
            {menuItems.map((item: MenuItem) => 
                <li key={item.id} className="header-menu__item">
                    <Link to={item.href} className="header-menu__link">
                        {item.label}
                    </Link>
                </li>
            )}
        </ul>
    </div>
}

const MobileMenu:FC<MenuItems> = ({menuItems}) => {
    const [isActive, setActive] = useState<boolean>(() => false)
    const location = useLocation()

    useEffect(() => {
        if(isActive) {
            setActive(!isActive)
        }
    },[location])

    const handleButtonMenu = ():void => {
        setActive(!isActive)
    }

    return <div className={`header-menu__wrapper mobile ${isActive ? 'active' : ''}`}>
        <button className='header-menu__button' onClick={() => handleButtonMenu()}>
            {!isActive ? <BurgerIcon /> : <CloseIcon />}
        </button>
        <ul className="header-menu__list">
        {menuItems.map((item: MenuItem) => 
            <li key={item.id} className="header-menu__item">
                <Link to={item.href} className="header-menu__link">
                    {item.label}
                </Link>
            </li>
        )}
    </ul>
    </div>

}

const Menu:FC<MenuItems> = ({menuItems}) => {
    
    return (
        <>
            <DesktopMenu menuItems={menuItems}/>
            <MobileMenu menuItems={menuItems}/>
        </>

    )
}

export default Menu