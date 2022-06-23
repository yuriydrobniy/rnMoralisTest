// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Moralis from 'moralis/react-native';

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: '/'}),
  tagTypes: ['NFTs'],
  endpoints: builder => ({
    getNFTs: builder.query({
      async queryFn(arg) {
        let result;
        try {
          result = await Moralis.Web3API.account.getNFTs({
            address: arg.address,
            chain: arg.chainId,
          });
          const data = result?.result || [];
          data.forEach(item => {
            if (item?.metadata) {
              item.metadata = JSON.parse(item.metadata);
            }
          });
          return {data};
        } catch (error) {
          let err = error;
          return {
            error: {
              status: err.response?.status,
              data: err.response?.data || err.message,
            },
          };
        }
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({token_id}: any) => ({
                type: 'NFTs' as const,
                id: token_id,
              })),
              {type: 'NFTs', id: 'LIST'},
            ]
          : [{type: 'NFTs', id: 'LIST'}],
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {useGetNFTsQuery} = apiSlice;
