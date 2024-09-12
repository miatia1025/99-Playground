import { apiSlice } from "./apiSlice";
import { PERSON_URL } from "../constants.js";

export const personApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: `${PERSON_URL}/registration`,
        method: "POST",
        body: data,
      }),
    }),

    getAllPerson: builder.query({
      query: () => ({
        url: PERSON_URL,
      }),
      providesTags: ["Person"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useRegistrationMutation, useGetAllPersonQuery } = personApiSlice;
