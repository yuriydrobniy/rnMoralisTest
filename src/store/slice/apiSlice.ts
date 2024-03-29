// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Moralis from 'moralis/react-native';

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: '/'}),
  tagTypes: ['NFTs', 'Pics'],
  endpoints: builder => ({
    getNFTs: builder.query({
      async queryFn(arg, queryApi, extraOptions, fetchWithBQ) {
        let result;
        let data;

        try {
          if (arg.simulator) {
            result = await fetchWithBQ('https://picsum.photos/v2/list?limit=4');
            console.log('result of ', result);
            data = result?.data || [];
            (data as any).forEach((item: any) => {
              item.metadata = {
                name: item?.author,
                external_url: `${item?.download_url}.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ`,
              };
              item.token_id = item?.id;
              item.amount = 1;
            });
          } else {
            result = await Moralis.Web3API.account.getNFTs({
              address: arg.address,
              chain: arg.chainId,
            });
            data = result?.result || [];
            data.forEach(item => {
              if (item?.metadata) {
                item.metadata = JSON.parse(item.metadata);
              }
            });
          }

          return {data};
        } catch (error) {
          // todo - clarify error type
          let err: any = error;
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
