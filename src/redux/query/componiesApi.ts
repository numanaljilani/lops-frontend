import { urls } from '@/constants/urls';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${urls.server}/api/v1/` }),
  endpoints: (builder) => ({
    componies: builder.mutation({
        query: (data) => {
          return {
            url: "companies",
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          };
        },
      }),
    createCompany: builder.mutation({
        query: (data) => {
          return {
            url: "companies/",
            method: "POST",
            body: data,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          };
        },
      }),
      allcites: builder.mutation({
        query: (token) => {
          return {
            url: "all-cities",
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `bearer ${token}`,
            },
          };
        },
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAllcitesMutation , useComponiesMutation ,useCreateCompanyMutation} = companiesApi