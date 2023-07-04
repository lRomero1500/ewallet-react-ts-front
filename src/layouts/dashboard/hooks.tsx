import { useDispatch, useSelector } from "react-redux";
import BalanceService from "../../services/balance-services";
import { IRootState } from "../../redux";
import { useEffect, useState } from "react";
import { IUserState, setBalance } from "../../redux/slices/user-slice";

const useNavbarHook = (): IUserState => {
  const [result, setResult] = useState("0");
  const dispatch = useDispatch();
  const userState = useSelector((state: IRootState) => {
    return state.user;
  });
  useEffect(() => {
    const getBalance = async () => {
      const balance = await BalanceService.getBalance(
        userState.userData?.token ?? ""
      );
      setResult(balance);
    };
    getBalance();
    dispatch(setBalance(Number.parseFloat(result)));
  }, [dispatch, result, userState.userData?.token]);
  return userState;
};
export default useNavbarHook;
