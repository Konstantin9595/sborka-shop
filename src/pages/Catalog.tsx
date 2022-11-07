import {useEffect} from 'react'
import { useParams } from "react-router-dom"
import Error from "../components/Error"
import Preloader from "../components/Preloader"
import ProductCatalog from "../components/ProductCatalog"
import { useGetProductsQuery } from "../store/api/product"

const Catalog = () => {
    const {category} = useParams()
    const {isError, isSuccess, isLoading, data: items} = useGetProductsQuery(category)
    const entyties = items ? items : []
    

    console.log('category: ', category)
    return (
        <div className="catalog-page">
            { isError ? <Error /> 
            : isLoading ? <Preloader /> 
            : <ProductCatalog items={entyties} />
            }
        </div>
    )
}

export default Catalog
