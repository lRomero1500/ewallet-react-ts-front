import axios from "axios";
import { EnrollmentDTO, SignInDTO, UserProfileDTO } from "../dtos/user-dtos";
import { ICommonResponse } from "../interfaces/commonResponse";

const AUTH_URL = "http://localhost:3004";
const ENROLLMENT_URL = "http://localhost:3000";

const signInRequest = async (data: SignInDTO): Promise<UserProfileDTO> => {
  const path = "/auth/signIn";
  return (await axios.post(`${AUTH_URL}${path}`, data))
    .data satisfies UserProfileDTO;
};
const signUpRequest = async (data: EnrollmentDTO): Promise<ICommonResponse> => {
  const path = "/enrollment/new";
  const result = await axios.post(`${ENROLLMENT_URL}${path}`, data);
  return result.data satisfies ICommonResponse;
};
const AuthService = {
  signInRequest,
  signUpRequest,
};
export default AuthService;
