import InputAtom, { InputAtomProps } from "../../atoms/Input";
import { ButtonAtomProps } from "../../atoms/button";
import HeadingAtom from "../../atoms/heading";
import { ReactElement } from "react";
import ParagraphAtom from "../../atoms/paragraph";
import ButtonAtom from "../../atoms/button/index";
import SpanAtom from "../../atoms/span";
import LinkAtom from "../../atoms/link";

export type SignInFormMoleculeProps = {
  email: InputAtomProps;
  password: InputAtomProps;
  button: ButtonAtomProps;
  idForm: string;
};

const SingInFormMolecule = ({
  email,
  password,
  button,
  idForm,
}: SignInFormMoleculeProps): ReactElement => {
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
              Inicio de Sesion
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-0">
              "¡Bienvenido a Dany Wallet! Tu billetera digital segura y
              conveniente. Administra tus finanzas en un solo lugar."
            </ParagraphAtom>
          </div>
          <div className="col-md-7 col-lg-6 ml-auto">
            <form id={idForm}>
              <div className="row">
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
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <InputAtom {...password}></InputAtom>
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <a href="#" className="btn btn-primary btn-block py-2">
                    <SpanAtom className="font-weight-bold">Ingreso</SpanAtom>
                  </a>
                  <ButtonAtom {...button}></ButtonAtom>
                </div>
                <div className="text-center w-100">
                  <ParagraphAtom className="text-muted font-weight-bold">
                    Aun no tienes cuenta?
                    <LinkAtom href="#" className="text-primary ml-2">
                      Registrate
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

export default SingInFormMolecule;
