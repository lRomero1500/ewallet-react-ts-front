import { useDispatch, useSelector } from "react-redux";
import BalanceService from "../../services/balance-services";
import { IRootState } from "../../redux";
import { useCallback, useEffect, useState } from "react";
import {
  IUserState,
  setBalance,
  setUserSignedOut,
} from "../../redux/slices/user-slice";
import { useNavigate } from "react-router-dom";

type NavbarHookProps = {
  userState: IUserState;
  getBalance: () => Promise<void>;
};

const useNavbarHook = (): NavbarHookProps => {
  const [result, setResult] = useState("0");
  const dispatch = useDispatch();
  const userState = useSelector((state: IRootState) => {
    return state.user;
  });
  const getBalance = useCallback(async () => {
    const balance = await BalanceService.getBalance(
      userState.userData?.token ?? ""
    );
    setResult(balance);
  }, [userState.userData?.token]);
  useEffect(() => {
    getBalance();
    dispatch(setBalance(Number.parseFloat(result)));
  }, [dispatch, result, userState.userData?.token, getBalance]);
  return { userState, getBalance };
};
const useSignOutHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = () => {
    dispatch(setUserSignedOut(null));
    navigate("/");
  };
  return signOut;
};
const UserHooks = {
  useNavbarHook,
  useSignOutHook,
};
export default UserHooks;
