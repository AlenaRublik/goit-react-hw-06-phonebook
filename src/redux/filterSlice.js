import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilterValue: (_, { payload }) => {
      return payload;
    },
  },
});

export const { updateFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
