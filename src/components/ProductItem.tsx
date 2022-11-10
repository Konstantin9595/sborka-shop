import { FC } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../store/slices/cartSlice"
import { CartItem, ProductItem as ProductItemType } from "../types"
import CartIcon from './CartIcon'

const ProductItem: FC<ProductItemType> = (product) => {
    const dispatch = useDispatch()

    //console.log('category: ', product.category)

    const addToCartHandler = (cartItem: CartItem) => {
        dispatch(addToCart(cartItem))
    }

    return <div className="product-catalog__item"> 
        <Link className="product-item__top" to={`/product/${product.sku}`}>
            <img 
                src={product.image.url} 
                alt={`${product.title}`}
                className="product-item__image" 
            />
            <h2 className="product-item__title">
                {product.title}
            </h2>
        </Link>
        <div className="product-item__bottom">
            <div className="product-item__cart" onClick={() => addToCartHandler({...product, count: 1})}>
                <CartIcon withBackground={true} />
            </div>
            <div className="product-item__price">
                {product.symbol} {product.price}
            </div>
        </div>
    </div>
}


export default ProductItem