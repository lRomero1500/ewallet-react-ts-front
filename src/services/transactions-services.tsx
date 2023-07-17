import axios, { AxiosRequestConfig } from "axios";
import { ItemListAtomProps } from "../components";
import { ActivityDTO } from "../dtos/activity-dtos/index";

const TRANSACTIONS_URL = "http://localhost:3002";

const getActivity = async (token: string): Promise<ItemListAtomProps[]> => {
  const path = "/activity";
  const options: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const result = parseToItemListAtomProps(
    (await axios.get(`${TRANSACTIONS_URL}${path}`, options)).data
      .data as ActivityDTO[]
  );
  return result;
};
const parseToItemListAtomProps = (data: ActivityDTO[]): ItemListAtomProps[] => {
  const result: ItemListAtomProps[] = [];
  data.forEach((item) => {
    result.push({
      transactionType: item.transactionType,
      movementType: item.movementType,
      status: item.status,
      icon: item.isInCome ? 1 : 0,
      transactionId: item.transactionId,
      amount: item.amount,
    } as ItemListAtomProps);
  });
  return result;
};
const TransactionsService = {
  getActivity,
};
export default TransactionsService;
