import axios, { AxiosRequestConfig } from "axios";

const ENROLLMENT_URL = "http://localhost:3000";

const getBalance = async (token: string): Promise<string> => {
  const path = "/account/balance";
  const options: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const result = (await axios.get(`${ENROLLMENT_URL}${path}`, options))
    .data as string;
  return result;
};
const BalanceService = {
  getBalance,
};
export default BalanceService;
