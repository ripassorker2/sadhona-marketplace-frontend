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
                body: data,
            }),
        }),
        createConversation: builder.mutation({
            query: (data) => ({
                url: `chat/conversation`,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useGetConversationQuery,
    useCreateNewMessageMutation,
    useCreateConversationMutation,
} = chatApiSlice;
