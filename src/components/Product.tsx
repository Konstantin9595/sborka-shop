import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom"
import { useGetProductBySkuQuery } from "../store/api/product"
import { ProductItem } from "../types"
import CartIcon from "./CartIcon"
import Error from "./Error"
import Preloader from "./Preloader"

const Product = () => {
    const {sku} = useParams()
    const navigate = useNavigate()

    const {isLoading, isError, data: item} = useGetProductBySkuQuery(sku)

    const product = item ? item : null

    const renderProductItem = (product: ProductItem) => {
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
                <div className="card-item__cart">
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

export default Product