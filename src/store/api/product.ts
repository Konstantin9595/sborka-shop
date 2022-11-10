import { ThunkDispatch,  } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { arch } from 'os'
import { GrapqlProductsResponse, ProductItem, Products } from '../../types'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://graphql.contentful.com/content/v1/spaces/atelzsru7rt9/environments/master', 
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${process.env.REACT_APP_API_TOKEN}`)
            return headers
        }
    }),
    endpoints: builder => ({
        getProducts: builder.query<ProductItem[], unknown>({
            query: (category: string) => ({
                url: '',
                method: 'POST',
                body: JSON.parse(JSON.stringify({
                    query: `query productCollection($limit: Int, $category: String) {
                        productCollection(limit: $limit, where: {category: $category}) {
                          items {
                            title 
                            price
                            image {
                              url
                            }
                            sku
                            symbol
                            currency
                            gender
                            category
                          }
                        }
                      }`,
                    variables: {limit: 100, category}
                }))
            }),
            transformResponse: (response: GrapqlProductsResponse, meta): ProductItem[] => {
                const items: ProductItem[] = response.data.productCollection.items
                return items
            },
        }),
        getProductBySku: builder.query<ProductItem, unknown>({
            query: (sku: string) => ({
                url: '',
                method: 'POST',
                body: JSON.parse(JSON.stringify({
                    query: `query productCollection($limit: Int, $sku: String) {
                        productCollection(limit: $limit, where: {sku: $sku}) {
                          items {
                            title 
                            price
                            image {
                              url
                            }
                            sku
                            symbol
                            currency
                          }
                        }
                      }`,
                      variables: {limit: 1, sku}
                }))
            }),
            transformResponse: (response: GrapqlProductsResponse): ProductItem => {
                const item: ProductItem = response.data.productCollection.items[0]

                return item
            }
        })
    })
})

export const {useGetProductsQuery, useGetProductBySkuQuery} = productApi