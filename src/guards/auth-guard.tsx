import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactElement } from "react";
import { IRootState } from "../redux";

type AuthGuardProps = {
  component: ReactElement;
};

const AuthGuard = ({ component }: AuthGuardProps): ReactElement => {
  const userState = useSelector((state: IRootState) => {
    return state.user;
  });
  if (!userState.isLoggedIn) {
    return <Navigate to={"/sign-in"} />;
  } else {
    return component;
  }
};

export default AuthGuard;
