import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = (): ReactElement => {
  return <Outlet />;
};

export default AuthLayout;
