import Header from '../components/Header'
import { Outlet } from "react-router-dom";
const Main = () => {
    return (
        <div className="wrapper">
            <Header />
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
    )
}

export default Main
