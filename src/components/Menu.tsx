
import {MenuItem, MenuItems} from '../types'
import {FC} from 'react'
import { Link } from "react-router-dom";
const Menu:FC<MenuItems> = ({menuItems}) => {
    return (
        <ul className="header-menu__list">
            {menuItems.map((item: MenuItem) => 
            <li key={item.id} className="header-menu__item">
                <Link to={item.href}>
                    {item.label}
                </Link>
            </li>
            )}
        </ul>
    )
}

export default Menu