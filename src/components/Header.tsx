import {MenuItem} from "../types"
import Menu from "./Menu"
import Logo from './Logo'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux"
import { RootState } from "../store"

const Header = ({setCartOpened}: {setCartOpened: Function}) => {
    const menuItems: MenuItem[] = useSelector((state: RootState) => state.menu)

    return (
        <header className="header">
            <div className="header-logo">
                <Link to={'/'}>
                    <Logo />
                </Link>
            </div>
            <nav className="header-menu">
                <Menu menuItems={menuItems} />
            </nav>
            <div className="header-search">
                <SearchBar />
            </div>
            <div className="header-cart" onClick={() => setCartOpened((prev: boolean) => !prev)}>
                <CartIcon />
            </div>
        </header>
    )
}

export default Header
