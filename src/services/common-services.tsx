import axios from "axios";
import { DocumentTypeDTO, GenderDTO } from "../dtos/common";
import { ICommonResponse } from "../interfaces/commonResponse";

const ENROLLMENT_URL = "http://localhost:3000";

const getDocumentTypes = async (): Promise<
  ICommonResponse<DocumentTypeDTO[]>
> => {
  const path = `/common/document-types`;
  return (await axios.get(`${ENROLLMENT_URL}${path}`)).data as ICommonResponse<
    DocumentTypeDTO[]
  >;
};
const getGenders = async (): Promise<ICommonResponse<GenderDTO[]>> => {
  const path = `/common/genders`;
  return (await axios.get(`${ENROLLMENT_URL}${path}`)).data as ICommonResponse<
    GenderDTO[]
  >;
};
const CommonServices = {
  getDocumentTypes,
  getGenders,
};
export default CommonServices;
