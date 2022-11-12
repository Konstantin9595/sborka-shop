import ProductCardItem from "./ProductCardItem"
import { ProductItem as ProductItemType, Products } from "../types"
import { FC } from "react"

const ProductCatalog: FC<Products> = ({items}) => {
    return <div className="product-catalog">
        {items.map((productItem: ProductItemType) => {
            return <ProductCardItem 
            key={productItem.sku} 
            {...productItem}
            />
        })}
    </div>
}


export default ProductCatalog