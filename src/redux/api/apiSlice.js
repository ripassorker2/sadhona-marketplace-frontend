/* eslint-disable no-unused-vars */
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // credentials: "include",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Jobs"],
    endpoints: (builder) => ({}),
});
