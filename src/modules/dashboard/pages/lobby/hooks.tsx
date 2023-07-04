import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../redux";
import TransactionsService from "../../../../services/transactions-services";
import { IUserState, setActivity } from "../../../../redux/slices/user-slice";
import { useEffect, useState } from "react";
import { ItemListAtomProps } from "../../../../components/atoms/list-groups/item-list/index";

const useLobbyHook = (): IUserState => {
  const [result, setResult] = useState<ItemListAtomProps[]>([]);
  const dispatch = useDispatch();
  const userState = useSelector((state: IRootState) => {
    return state.user;
  });
  useEffect(() => {
    const getActivityData = async () => {
      const activityData = await TransactionsService.getActivity(
        userState.userData?.token ?? ""
      );
      setResult(activityData);
    };
    getActivityData();
    dispatch(setActivity(result));
  }, [userState.activity.length, result.length]);

  return userState;
};

export default useLobbyHook;
