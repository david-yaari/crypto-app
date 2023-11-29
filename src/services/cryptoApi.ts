// v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import exp from 'constants';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/',
  }),
  endpoints: (builder) => ({
    getCryptos: builder.mutation({
      query: ({ page, perPage }) => {
        return {
          url: `v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
          method: 'get',
        };
      },
    }),
  }),
});

export const { useGetCryptosMutation } = cryptoApi;