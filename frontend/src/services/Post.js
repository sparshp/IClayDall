import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/',
    }),
    

     // The set of operations that we want to perform against the server.
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: 'products',
                method: 'GET'
            })
        })
    }),
    endpoints: (builder) => ({
        getAllSellers: builder.query({
            query: () => ({
                url: 'seller',
                method: 'GET'
            })
        })
    })

})


export const {useGetAllProductQuery, useGetAllSellersQuery}=postApi