import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useGetProductBySkuQuery } from "../store/api/product"
import { addToCart } from "../store/slices/cartSlice"
import { CartItem, ProductItem as ProductItemType } from "../types"
import CartIcon from "./CartIcon"
import Error from "./Error"
import Preloader from "./Preloader"

const ProductItem = () => {
    const {sku} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoading, isError, data: item} = useGetProductBySkuQuery(sku)

    const product = item ? item : null

    const addToCartHandler = (product: ProductItemType) => {
        const cartItem: CartItem = {
            title: product.title,
            sku: product.sku,
            image: product.image,
            price: product.price,
            symbol: product.symbol,
            count: 1
        }
        dispatch(addToCart(cartItem))
    }

    const renderProductItem = (product: ProductItemType) => {
        if(isError) {
            return <Error />
        }
        return <>
            <div className="card-item__top">
                <div className="card-item__image">
                    <img 
                        src={product.image.url} 
                        alt={`${product.title}`}
                    />
                </div>
                <h2 className="card-item__title">
                    {product.title}
                </h2>
                <div className="card-item__sku">
                Item model number: {product.sku} 
                </div>
            </div>
            <div className="card-item__buttom">
                <div className="card-item__cart" onClick={() => addToCartHandler(product)}>
                    <CartIcon withBackground={true} />
                </div>
                <div className="card-item__price">
                    {product.symbol} {product.price}
                </div>
            </div>
        </>
    }

    return <div className="product-card">
        <div className="product-card__button">
            <button className="back__button" onClick={() => navigate(-1)}>
                Back in catalog
            </button>
        </div>
        <div className="product-card__item">
        { !product || isLoading
            ? <Preloader/> 
            : renderProductItem(product)
        }
        </div>
    </div>
}

export default ProductItem