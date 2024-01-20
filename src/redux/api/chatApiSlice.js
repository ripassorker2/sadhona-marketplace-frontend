const {apiSlice} = require("./apiSlice");

export const chatApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversation: builder.query({
            query: (id) => ({
                method: "GET",
                url: `/chat/conversation/${id}`,
            }),
            providesTags: ["Chat"],
        }),
        createNewMessage: builder.mutation({
            query: (data) => ({
                url: `/chat/message`,
                method: "POST",
                // headers: {
                //     authorization: localStorage.getItem("accessToken"),
                // },
                body: data,
            }),
        }),
    }),
});

export const {useGetConversationQuery, useCreateNewMessageMutation} =
    chatApiSlice;
