import { Col, Container, Row, Image } from "react-bootstrap";
import { signUpScreen } from "../../../../assets";
import SingUpOrganisms from "../../../../components/organisms/sign-up";
import signUpHooks from "./hooks";
import { useState } from "react";

const SignUpPage = () => {
  const [genders, documents, gendersMapped, docTypeMapped] =
    signUpHooks.useGetCommonLists();
  const signUpFormHook = signUpHooks.useSingUpFormHook(genders, documents);
  const [show, setShow] = useState(false);
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={signUpScreen} alt="loginScreen"></Image>
        </Col>
        <Col>
          <SingUpOrganisms
            form={{
              name: {
                id: "name-sign-up",
                name: "name",
                type: "text",
                value: signUpFormHook.values.name,
                onChange: signUpFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.name && signUpFormHook.touched.name
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.name,
                placeholder: "Nombres",
              },
              lastName: {
                id: "lasName-sign-up",
                name: "lastName",
                type: "text",
                value: signUpFormHook.values.lastName,
                onChange: signUpFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.lastName &&
                  signUpFormHook.touched.lastName
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.lastName,
                placeholder: "Apellidos",
              },
              email: {
                id: "email-sign-up",
                name: "email",
                type: "text",
                value: signUpFormHook.values.email,
                onChange: signUpFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.email && signUpFormHook.touched.email
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.email,
                placeholder: "Correo",
              },
              password: {
                id: "password-sign-up",
                name: "password",
                type: "password",
                value: signUpFormHook.values.password,
                onChange: signUpFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.password &&
                  signUpFormHook.touched.password
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.password,
                placeholder: "Contraseña",
              },
              confirmPassword: {
                id: "confirmPassword-sign-up",
                name: "confirmPassword",
                type: "password",
                value: signUpFormHook.values.confirmPassword,
                onChange: signUpFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.confirmPassword &&
                  signUpFormHook.touched.confirmPassword
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.confirmPassword,
                placeholder: "Confirma Contraseña",
              },
              phoneNumber: {
                id: "phoneNumber-sign-up",
                name: "phoneNumber",
                type: "text",
                value: signUpFormHook.values.phoneNumber,
                onChange: signUpFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.phoneNumber &&
                  signUpFormHook.touched.phoneNumber
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.phoneNumber,
                placeholder: "Celular",
              },
              documentType: {
                id: "docTypeId-sign-up",
                name: "docTypeId",
                type: "select",
                value: signUpFormHook.values.docTypeId,
                options: docTypeMapped,
                onChange: (e) => {
                  signUpFormHook.setFieldValue(
                    "docTypeId",
                    e.currentTarget.value
                  );
                },
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.docTypeId &&
                  signUpFormHook.touched.docTypeId
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.docTypeId,
                placeholder: "Tipo de documento",
              },
              identificationNumber: {
                id: "identificationNumber-sign-up",
                name: "identificationNumber",
                type: "text",
                value: signUpFormHook.values.identificationNumber,
                onChange: signUpFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.identificationNumber &&
                  signUpFormHook.touched.identificationNumber
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.identificationNumber,
                placeholder: "Numero Identificacion",
              },
              gender: {
                id: "genderId-sign-up",
                name: "genderId",
                type: "select",
                options: gendersMapped,
                value: signUpFormHook.values.genderId,
                onChange: (e) => {
                  signUpFormHook.setFieldValue(
                    "genderId",
                    e.currentTarget.value
                  );
                },
                className: `bg-white border-left-0 border-md ${
                  signUpFormHook.errors.genderId &&
                  signUpFormHook.touched.genderId
                    ? " is-invalid"
                    : ""
                }`,
                error: signUpFormHook.errors.genderId,
                placeholder: "Genero",
              },
              button: {
                type: "submit",
                className: "btn primary btn-block py-2",
                disabled: signUpFormHook.isSubmitting,
                isLoading: signUpFormHook.isSubmitting,
              },
              idForm: "sign-up-form",
              onSubmit: (e) => {
                signUpFormHook.handleSubmit(e);
                setShow(Object.entries(signUpFormHook.errors).length > 1);
              },
              errors: signUpFormHook.errors,
              show: show,
              setShow: setShow,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
