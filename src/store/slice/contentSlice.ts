import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import {
  ContentPathType,
  MetadataPathType,
  MintStatusType,
} from '../../interfaces/global';

export interface ContentState {
  metadataPath: MetadataPathType;
  contentPath: ContentPathType;
  mintStatus: MintStatusType;
}

const initialState: ContentState = {
  contentPath: '',
  metadataPath: '',
  mintStatus: false,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContentPath: (
      state,
      action: PayloadAction<{contentPath: ContentPathType}>,
    ) => {
      const {contentPath} = action.payload;
      state.contentPath = contentPath;
    },
    setMetadataPath: (
      state,
      action: PayloadAction<{metadataPath: MetadataPathType}>,
    ) => {
      const {metadataPath} = action.payload;
      state.metadataPath = metadataPath;
    },
    setMintStatus: (
      state,
      action: PayloadAction<{mintStatus: MintStatusType}>,
    ) => {
      const {mintStatus} = action.payload;
      state.mintStatus = mintStatus;
    },
    deleteContent: state => {
      state.contentPath = '';
      state.metadataPath = '';
      state.mintStatus = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

// Action creators are generated for each case reducer function
export const {setContentPath, deleteContent, setMetadataPath, setMintStatus} =
  contentSlice.actions;
export default contentSlice.reducer;
