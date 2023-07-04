import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactElement } from "react";

type AuthGuardProps = {
  component: ReactElement;
};

const AuthGuard = ({ component }: AuthGuardProps): ReactElement => {
  const token = useSelector((state) => {
    return state.user.userData;
  });
  if (!token) {
    return <Navigate to={"/sign-in"} />;
  } else {
    return component;
  }
};

export default AuthGuard;
