import {useState, useEffect, useLayoutEffect} from 'react'
import Header from '../components/Header'
import { Outlet } from "react-router-dom"
import CartContainer from '../components/CartContainer'

const Main = () => {
    const [isCartOpened, setCartOpened] = useState(false)
    useEffect(() => {
        const width = window.innerWidth
        const onLoadHandler = () => {
            if(width >= 1200) {
                setCartOpened(true)
            } else {
                setCartOpened(false)
            }
        }

        window.addEventListener('load', onLoadHandler)

        return () => {
            window.removeEventListener('load', onLoadHandler)
        }
    }, [])

    return (
        <div className="wrapper">
            <Header setCartOpened={setCartOpened}/>
            <div className="content">
                <div className="content-main">
                    <Outlet />
                </div>
                <CartContainer isOpened={isCartOpened} setCartOpened={setCartOpened}/>
            </div>
        </div>
    )
}

export default Main
