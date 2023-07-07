import axios from "axios";
import { SignInDTO, UserProfileDTO } from "../dtos/user-dtos";

const AUTH_URL = "http://localhost:3004";

const signInRequest = async (data: SignInDTO): Promise<UserProfileDTO> => {
  const path = "/auth/signIn";
  return (await axios.post(`${AUTH_URL}${path}`, data))
    .data satisfies UserProfileDTO;
};
const AuthService = {
  signInRequest,
};
export default AuthService;
