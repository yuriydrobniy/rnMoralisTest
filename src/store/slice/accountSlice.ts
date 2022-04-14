import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Error, WalletSimpleCredential} from '../../interfaces/global';

export interface AccountState {
  address: string;
  chainId: string;
  isLoading: boolean;
  error: any | undefined;
}

const initialState: AccountState = {
  address: '',
  chainId: '',
  isLoading: false,
  error: undefined,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    success: (state, action: PayloadAction<WalletSimpleCredential>) => {
      const {address, chainId} = action.payload;
      state.address = address;
      state.chainId = chainId;
      state.isLoading = false;
    },
    loading: state => {
      state.isLoading = true;
    },
    failed: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {success, loading, failed} = accountSlice.actions;
export default accountSlice.reducer;
