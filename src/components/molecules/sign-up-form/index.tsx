import { ReactElement } from "react";
import InputAtom, { InputAtomProps } from "../../atoms/Input";
import ButtonAtom, { ButtonAtomProps } from "../../atoms/button";
import HeadingAtom from "../../atoms/heading";
import ParagraphAtom from "../../atoms/paragraph";
import LinkAtom from "../../atoms/link";

export type SignUpFormMoleculeProps = {
  name: InputAtomProps;
  lastName: InputAtomProps;
  gender: InputAtomProps;
  identificationNumber: InputAtomProps;
  documentType: InputAtomProps;
  phoneNumber: InputAtomProps;
  button: ButtonAtomProps;
  email: InputAtomProps;
  password: InputAtomProps;
  confirmPassword: InputAtomProps;
  idForm: string;
};

const SignUpFromMolecule = ({
  idForm,
  name,
  lastName,
  gender,
  identificationNumber,
  documentType,
  phoneNumber,
  button,
  email,
  password,
  confirmPassword,
}: SignUpFormMoleculeProps): ReactElement => {
  return (
    <>
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="/src/assets/loginScreen.svg"
              alt="loginImage"
              className="img-fluid mb-3 d-none d-md-block"
            />
            <HeadingAtom level={1} className="">
              Crea una cuenta!
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-0">
              ¡Únete a la revolución financiera con Dany Wallet! Crea tu cuenta
              y descubre la libertad de una billetera digital. ¡Tu futuro
              financiero comienza aquí!
            </ParagraphAtom>
          </div>
          <div className="col-md-7 col-lg-6 ml-auto">
            <form id={idForm}>
              <div className="row">
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...name}></InputAtom>
                </div>
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...lastName}></InputAtom>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...email}></InputAtom>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...phoneNumber}></InputAtom>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...gender}></InputAtom>
                </div>
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...documentType}></InputAtom>
                </div>
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...identificationNumber}></InputAtom>
                </div>
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...password}></InputAtom>
                </div>
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...confirmPassword}></InputAtom>
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <ButtonAtom {...button}>Crea tu cuenta</ButtonAtom>
                </div>
                <div className="text-center w-100">
                  <ParagraphAtom className="text-muted font-weight-bold">
                    Already Registered?
                    <LinkAtom href="#" className="text-primary ml-2">
                      Ingresa a tu cuenta
                    </LinkAtom>
                  </ParagraphAtom>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpFromMolecule;
