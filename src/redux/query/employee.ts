import { urls } from '@/constants/urls';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${urls.server}/api/v1/` }),
  endpoints: (builder) => ({
    employee: builder.mutation({
        query: (data) => {
          return {
            url: "employees",
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          };
        },
      }),
    updaterates: builder.mutation({
        query: (data) => {
          return {
            url: "/update-rate",
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
export const { useAllcitesMutation , useEmployeeMutation ,useUpdateratesMutation} = employeeApi