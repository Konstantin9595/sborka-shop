import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import Error from "../components/Error"
import Preloader from "../components/Preloader"
import ProductCatalog from "../components/ProductCatalog"
import { useGetProductsQuery } from "../store/api/product"

const Catalog = () => {
    const {category} = useParams()
    const {isError, isLoading, data: items} = useGetProductsQuery(category)
    const entities = items ? items : []
    

    //console.log('category: ', category)
    return (
        <div className="catalog-page">
            { isError ? <Error /> 
            : isLoading ? <Preloader /> 
            : <ProductCatalog items={entities} />
            }
        </div>
    )
}

export default Catalog
