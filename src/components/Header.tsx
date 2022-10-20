import {MenuItem} from "../types"
import Menu from "./Menu"
import Logo from './Logo'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import {Link} from 'react-router-dom'

const menuItems: MenuItem[] = [
    {
        id: 1,
        label: "Women's",
        href: "/womens"
    },
    {
        id: 2,
        label: "Men's",
        href: "/mens"
    },
    {
        id: 3,
        label: "Home",
        href: "/home"
    },
    {
        id: 4,
        label: "Travel",
        href: "/travel"
    }, {
        id: 5,
        label: "Beauty",
        href: "/beauty"
    }, {
        id: 6,
        label: "Sale",
        href: "/sale"
    }
]

const Header = () => {
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
            <div className="header-cart">
                <CartIcon />
            </div>
        </header>
    )
}

export default Header
