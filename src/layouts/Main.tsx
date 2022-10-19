import Menu from '../components/Menu'
import { MenuItem } from '../types'
import { Outlet } from "react-router-dom";
const Main = () => {
    const menuItems: MenuItem[] = [
        {
            id: 1,
            label: "Women's",
            href: "/womens",
        },
        {
            id: 2,
            label: "Men's",
            href: "/mens",
        },
        {
            id: 3,
            label: "Home",
            href: "/home",
        },
        {
            id: 4,
            label: "Travel",
            href: "/travel",
        },
        {
            id: 5,
            label: "Beauty",
            href: "/beauty",
        },
        {
            id: 6,
            label: "Sale",
            href: "/sale",
        }
    ]
    return (
        <div className="wrapper">
            <div className="container">
                <header className="header">
                    <div className="header-logo">
                        Header Logo
                    </div>
                    <nav className="header-menu">
                        <Menu menuItems={menuItems}/>
                    </nav>
                    <div className="header-search">
                        Header search
                    </div>
                    <div className="header-cart">
                        Header cart
                    </div>
                </header>
            </div>
            <div className="container">
                <div className="content">
                    <div className="content-main">
                        <Outlet />
                    </div>
                    <div className="content-cart">
                        <div className="content-cart__item">
                            Content cart item
                        </div>
                        <div className="content-cart__promocode">
                            Promocode
                        </div>
                        <div className="content-cart__summary">
                            Summary
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
