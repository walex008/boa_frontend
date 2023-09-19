// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://boa-api.naijasabi.org/public/api/v1",
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "Authorization",
    //     `Bearer ${localStorage.getItem("accessToken")}`
    //   );
    // },
  }),
  //   tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/user/api/v1/register",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/user/api/v1/login",
        method: "POST",
        body: user,
      }),
      //   invalidatesTags: ["User"],
    }),

    getHeadOffice: builder.query({
      query: () => ({
        url: "/head-office",
      }),
    }),
    getAllZones: builder.query({
      query: () => ({
        url: "/zone",
      }),
    }),
    addZone: builder.mutation({
      query: (newZone) => ({
        url: "/zone",
        method: "POST",
        body: newZone,
        responseHandler: (response) =>
          response.text().catch((error) => error.text()),
      }),
    }),
    getAllAreas: builder.query({
      query: () => ({
        url: "/area",
      }),
    }),
    getAllBranches: builder.query({
      query: () => ({
        url: "/branch",
      }),
    }),
  }),
});

export const {
  useGetHeadOfficeQuery,
  useGetAllZonesQuery,
  useGetAllAreasQuery,
  useGetAllBranchesQuery,
  useLoginMutation,
  useRegisterMutation,
  useAddZoneMutation,
} = apiSlice;
