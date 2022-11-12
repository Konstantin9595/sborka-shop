import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GrapqlProductsResponse, ProductItem } from '../../types'

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
        }),
        searchProducts: builder.query<ProductItem[], unknown>({
          query: ({title, limit}) => ({
              url: '',
              method: 'POST',
              body: JSON.parse(JSON.stringify({
                  query: `query searchProducts($limit: Int, $title: String) {
                    productCollection(
                      limit: $limit, 
                      where: {title_contains: $title},
                      order: price_ASC
                    ) {
                      items {
                        title 
                        image {
                          url
                        }
                        sku,
                        price
                      }
                    }
                  }`,
                  variables: {limit, title}
              }))
          }),
          transformResponse: (response: GrapqlProductsResponse, meta): ProductItem[] => {
              const items: ProductItem[] = response.data.productCollection.items
              return items
          },
      }),
    }),
    
})

export const {useGetProductsQuery, useGetProductBySkuQuery, useSearchProductsQuery} = productApi


// New Balance 5740 Think Colorfully