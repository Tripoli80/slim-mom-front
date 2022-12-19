import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { URL_DB } = process.env;

export const diaryApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_DB,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }

      return headers;
    },
  }),

  tagTypes: ['Product'],
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/product',
      providesTags: ['Product'],
      keepUnusedDataFor: 2,
    }),
    createProduct: builder.mutation({
      query: product => ({
        url: `/product`,
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),

    editProduct: builder.mutation({
      query: ({ id, name, grams }) => ({
        url: `/product/${id}`,
        method: 'PATCH',
        body: { name, grams },
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useEditProductMutation
} =  diaryApi;
