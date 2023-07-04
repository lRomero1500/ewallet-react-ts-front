import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserProfileDTO } from "../../dtos/user-dtos";

export interface IUserState {
  userData: UserProfileDTO | null;
  isLoggedIn: boolean;
}
const user = JSON.parse(localStorage.getItem("security.user") ?? "{}");
const initialState: IUserState = {
  userData: Object.keys(user).length > 1 ? user : null,
  isLoggedIn: Object.keys(user).length > 1 ? true : false,
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
  },
});

export const { setUserSignedIn, setUserSignedOut } = userSlice.actions;
export default userSlice.reducer;
