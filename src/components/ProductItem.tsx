import { FC } from "react"
import { Link } from "react-router-dom"
import { ProductItem as ProductItemType } from "../types"
import CartIcon from './CartIcon'

const ProductItem: FC<ProductItemType> = ({title, price, image, sku, symbol, currency, gender, category}) => {
    console.log('category: ', category)
    return <div className="product-catalog__item"> 
        <Link className="product-item__top" to={`/product/${sku}`}>
            <img 
                src={image.url} 
                alt={`${title}`}
                className="product-item__image" 
            />
            <h2 className="product-item__title">
                {title}
            </h2>
        </Link>
        <div className="product-item__bottom">
            <div className="product-item__cart">
                <CartIcon withBackground={true} />
            </div>
            <div className="product-item__price">
                {symbol} {price}
            </div>
        </div>
    </div>
}


export default ProductItem