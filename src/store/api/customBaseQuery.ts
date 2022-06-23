import Moralis from 'moralis/react-native';
import {address} from 'hardhat/internal/core/config/config-validation';
import chainId = Moralis.chainId;
import {BaseQueryFn} from '@reduxjs/toolkit/query';

export const customBaseQuery =
  (
    args,
    {signal, dispatch, getState},
    extraOptions,
  ): BaseQueryFn<{url: string; data?: any}, unknown, unknown> =>
  async ({url, data}) => {
    let query;
    let queryData;
    switch (url) {
      case 'getnfts':
        query = Moralis.Web3API.account.getNFTs;
        queryData = {address: data.address, chain: data.chainId};
        break;
    }
    try {
      const result = await query(queryData);
      return {data: result.result};
    } catch (error) {
      let err = error;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
