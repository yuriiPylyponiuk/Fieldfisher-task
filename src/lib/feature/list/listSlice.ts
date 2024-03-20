import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export type CustomerPropType = {
  customerName: string;
  startDate: string;
  isFinished: boolean;
  id: string;
};
export const initialState = {
  list: [] as CustomerPropType[],
};

export const customerSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CustomerPropType>) => {
      state.list = [...current(state).list, action.payload];
    },
  },
});

export const { addItem } = customerSlice.actions;

export default customerSlice.reducer;
