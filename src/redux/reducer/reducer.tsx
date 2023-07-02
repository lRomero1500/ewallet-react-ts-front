import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IState {
  state: string;
}

const initialState: IState = {
  state: "Ej",
};

export const rootReducer = createSlice({
  name: "Ej",
  initialState,
  reducers: {
    reducerName: (state, action: PayloadAction<IState>): void => {
      console.log(`Test -> State: ${state}, Action -> ${action}`);
    },
  },
});

export default rootReducer.reducer;
