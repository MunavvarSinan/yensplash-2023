import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CheckoutSessionArgs {
    // Define any arguments that the checkout_session endpoint expects
}
const onSuccess = (data: { request: { query: string }; data: unknown }) => {
    console.log('onSuccess', data)
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://yensplah-payment-backend.onrender.com',
    }),
    endpoints: (builder) => ({
        //builder.query for get requests
        //builder.mutation for post requests
        createCheckoutSession: builder.mutation({
            query: (email) => ({
                url: '/api/payment/checkout_sessions',
                method: 'POST',
                body: email
            }),

        }),
        login: builder.mutation({
            query: (credentials: { email: string; password: string }) => ({
                url: '/api/login',
                method: 'POST',
                body: credentials,
                headers: {
                    "Content-Type": 'application/json'
                }
            }),
        })
    }),
});

export const {
    useCreateCheckoutSessionMutation,
    useLoginMutation
} = apiSlice;
