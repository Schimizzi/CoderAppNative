import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realtimeDataBase"

export const shopApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`
    }),
    getProducts: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const transformResp = Object.values(response)
        console.log(transformResp)
        return transformResp
      }
    }),
    getProduct: builder.query({
      query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) => {
        const transformResp = Object.values(response)
        if(transformResp.length) return transformResp[0]
      }

    })
  })
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductQuery
} = shopApi;
