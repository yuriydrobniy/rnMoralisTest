import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import {Content, MetadataPath} from '../../interfaces/global';

export interface ContentState extends MetadataPath, Content {}

const initialState: ContentState = {
  content: '',
  metadataPath: '',
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<Content>) => {
      const {content} = action.payload;
      state.content = content;
    },
    setMetadataPath: (state, action: PayloadAction<MetadataPath>) => {
      const {metadataPath} = action.payload;
      state.metadataPath = metadataPath;
    },
    deleteContent: state => {
      state.content = '';
      state.metadataPath = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

// Action creators are generated for each case reducer function
export const {setContent, deleteContent, setMetadataPath} = contentSlice.actions;
export default contentSlice.reducer;
