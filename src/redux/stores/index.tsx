import { configureStore } from "@reduxjs/toolkit";
import userReducer, { IUserState } from "../slices/user-slice";

export interface IRootState {
  user: IUserState;
}
export const store = configureStore<IRootState>({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
