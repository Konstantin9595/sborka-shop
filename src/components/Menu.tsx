
import {MenuItem, MenuItems} from '../types'
import {FC, useState, useEffect} from 'react'
import { NavLink, Location } from "react-router-dom"
import { ReactComponent as BurgerIcon} from '../assets/images/Burger.svg'
import { ReactComponent as CloseIcon} from '../assets/images/ExitBold.svg'
import { useLocation } from 'react-router-dom';

const DesktopMenu:FC<MenuItems & {location: Location}> = ({menuItems, location}) => {
    const {pathname} = location
    
    return <div className="header-menu__wrapper desktop">
        <ul className="header-menu__list">
            {menuItems.map((item: MenuItem) => 
                <li key={item.id} className="header-menu__item">
                    <NavLink to={item.href} className={`header-menu__link ${pathname === '/' && item.href === '/home' ? 'active' : ''}`}>
                        {item.label}
                    </NavLink>
                </li>
            )}
        </ul>
    </div>
}

const MobileMenu:FC<MenuItems & {location: Location}> = ({menuItems, location}) => {
    const [isActive, setActive] = useState<boolean>(() => false)
    const {pathname} = location

    useEffect(() => {
        if(isActive) {
            setActive(!isActive)
        }

        // eslint-disable-next-line
    }, [])
    
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
                <NavLink 
                    to={item.href} 
                    className={`header-menu__link ${pathname === '/' && item.href === '/home' ? 'active' : ''}`}
                    onClick={() => setActive(!isActive)}
                    >
                    {item.label}
                </NavLink>
            </li>
        )}
    </ul>
    </div>

}

const Menu:FC<MenuItems> = ({menuItems}) => {
    const location = useLocation()
    
    return (
        <>
            <DesktopMenu menuItems={menuItems} location={location}/>
            <MobileMenu menuItems={menuItems} location={location}/>
        </>

    )
}

export default Menu