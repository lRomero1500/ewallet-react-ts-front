import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserProfileDTO } from "../../dtos/user-dtos";
import { number } from "yup";
import { ItemListAtomProps } from "../../components";

export interface IUserState {
  userData: UserProfileDTO | null;
  isLoggedIn: boolean;
  balance: number;
  activity: ItemListAtomProps[];
}
const user = JSON.parse(localStorage.getItem("security.user") ?? "{}");
const initialState: IUserState = {
  userData: Object.keys(user).length > 1 ? user : null,
  isLoggedIn: Object.keys(user).length > 1 ? true : false,
  balance: 0,
  activity: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSignedIn: (state, action: PayloadAction<UserProfileDTO>): void => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      localStorage.setItem("security.user", JSON.stringify(action.payload));
    },
    setUserSignedOut: (state, action: PayloadAction<null>): void => {
      state.isLoggedIn = false;
      state.userData = action.payload;
      localStorage.setItem("security.user", "{}");
    },
    setBalance: (state, action: PayloadAction<number>): void => {
      state.balance = action.payload;
    },
    setActivity: (state, action: PayloadAction<ItemListAtomProps[]>): void => {
      state.activity = action.payload;
    },
  },
});

export const { setUserSignedIn, setUserSignedOut, setBalance, setActivity } =
  userSlice.actions;
export default userSlice.reducer;
