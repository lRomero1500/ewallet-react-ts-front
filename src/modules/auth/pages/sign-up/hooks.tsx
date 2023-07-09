import { useDispatch } from "react-redux";
import { SingUpDTO } from "../../../../dtos/user-dtos";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DocumentTypeDTO, GenderDTO } from "../../../../dtos/common";
import CommonServices from "../../../../services/common-services";

const initialValues = {
  person_id: "",
  name: "",
  lastName: "",
  genderId: "",
  identificationNumber: "",
  docTypeId: "",
  phoneNumber: "",
  email: "",
  user_id: "",
  password: "",
  confirmPassword: "",
  statusId: "1",
} as SingUpDTO;

const useSingUpFormHook = (
  genders: GenderDTO[],
  documentTypes: DocumentTypeDTO[]
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gendersKeys = genders.map((i) => i.id);
  const documentKeys = documentTypes.map((i) => i.id);
  const validationSchema = Yup.object<SingUpDTO>().shape({
    name: Yup.string()
      .required("El campo nombre es requerido")
      .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/, "Ingrese nombres validos"),
    lastName: Yup.string()
      .required("El campo apellido es requerido")
      .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s-']+$/, "Ingrese apellidos valids"),
    genderId: Yup.number()
      .required("El campo genero el requerido")
      .oneOf(gendersKeys),
    docTypeId: Yup.number()
      .required("El campo tipo de documento es requerido")
      .oneOf(documentKeys),
    identificationNumber: Yup.string()
      .test(
        "identification-number",
        "Ingrese un número de documento válido",
        (value, { resolve }) => {
          const docTypeId = resolve(Yup.ref("docTypeId"));
          if (docTypeId === 1) {
            return /^\d{10}$/.test(value ?? "");
          } else if (docTypeId === 2) {
            return /^[a-zA-Z]?\d{6,9}$/.test(value ?? "");
          } else if (docTypeId === 3) {
            return /^[a-zA-Z]?\d{7}$/.test(value ?? "");
          }
          return false;
        }
      )
      .required("El campo número de documento es requerido"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{7,10}$/, "Ingrese un número de celular válido")
      .required("El campo número de celular es requerido"),
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("El campo correo electrónico es requerido"),
    password: Yup.string()
      .required("El campo constraseña es requerido")
      .matches(
        /(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        `Contraseña debe tener al menos una letra en mayuscula,una letra en minuscula, un numero y simbolo`
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Las contraseñas deben coincidir")
      .required("El campo confirmación de contraseña es requerido"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (data) => {
      data.person_id = uuidv4();
      data.user_id = uuidv4();
      console.log(data);
    },
  });
  return formik;
};
const useGetCommonLists = (): [GenderDTO[], DocumentTypeDTO[]] => {
  const [documentTypes, setDocumentTypes] = useState<DocumentTypeDTO[]>([]);
  const [genders, setGenders] = useState<GenderDTO[]>([]);
  useEffect(() => {
    const getLists = async () => {
      if (!documentTypes.length) {
        const result = await CommonServices.getDocumentTypes();
        setDocumentTypes(result.data as DocumentTypeDTO[]);
      }
      if (!genders.length) {
        const result = await CommonServices.getGenders();
        setGenders(result.data as GenderDTO[]);
      }
    };
    getLists();
  }, [documentTypes.length, genders.length]);
  return [genders, documentTypes];
};

const signUpHooks = {
  useSingUpFormHook,
  useGetCommonLists,
};
export default signUpHooks;
