import { useDispatch } from "react-redux";
import { SignInDTO } from "../../../../dtos/user-dtos";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "../../../../services/auth-services";
import { setUserSignedIn } from "../../../../redux/slices/user-slice";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
} as SignInDTO;

const useSignInFormHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object<SignInDTO>().shape({
    email: Yup.string()
      .required("El campo email es requerido")
      .email("Email invalido"),
    password: Yup.string().required("El campo constraseña es requerido"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: async (data) => {
      const userData = await AuthService.signInRequest(data);
      dispatch(setUserSignedIn(userData));
      navigate("/");
    },
  });
  return formik;
};
export default useSignInFormHook;
