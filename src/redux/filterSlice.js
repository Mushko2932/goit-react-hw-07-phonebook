import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setContactsFilter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
