import Decimal from "decimal.js";

export type TransactionsDTO = {
  id?: number;
  statusId?: number;
  typeId: number;
  userFromId?: string;
  userToId: string;
};

export type TransferAmountDTO = {
  transaction: TransactionsDTO;
  amount: Decimal;
};

export type TransferAmountDTOForm = {
  typeId: number;
  userToId: string;
  amount: number;
};
