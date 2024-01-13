const {apiSlice} = require("./apiSlice");

export const jobApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: (queries) => ({
                method: "GET",
                url: `/job?${queries}`,
            }),
        }),
        createJob: builder.mutation({
            query: (data) => ({
                url: `/job/create`,
                method: "POST",
                headers: {
                    authorization: localStorage.getItem("accessToken"),
                },
                body: data,
            }),
        }),
    }),
});

export const {useGetAllJobsQuery, useCreateJobMutation} = jobApiSlice;
