import React from 'react';
import {FlatList, Text, View} from 'react-native';

// components
import FullWidthImage from '../FullWidthImage/FullWidthImage';

// store
import {useGetNFTsQuery} from '../../store/slice/apiSlice';

// styles
import styles from './styles';

// types
import {WalletSimpleCredential} from '../../interfaces/global';

const NFTList = ({
  address,
  chainId,
  simulator,
}: WalletSimpleCredential & {simulator: boolean}): JSX.Element => {
  const {
    data: nftList = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetNFTsQuery(
    {address, chainId, simulator},
    // {refetchOnMountOrArgChange: true},
  );

  console.log('nftList -->>', {
    nftList,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  });

  const onRefresh = () => {
    refetch();
  };

  return (
    <FlatList
      data={nftList}
      contentContainerStyle={styles.listContainer}
      keyExtractor={item => item.token_id}
      onRefresh={onRefresh}
      refreshing={isFetching}
      removeClippedSubviews={false}
      bounces={true}
      numColumns={1}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => {
        const name = item.metadata?.name || '';
        const url = item.metadata?.external_url || '';
        const id = item.token_id || '';
        const amount = item.amount || '';

        return (
          <View style={styles.itemContainer}>
            <FullWidthImage url={url} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Name: {name}</Text>
              <Text style={styles.text}>ID: {id}</Text>
              <Text style={styles.text}>Amount: {amount}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default NFTList;
