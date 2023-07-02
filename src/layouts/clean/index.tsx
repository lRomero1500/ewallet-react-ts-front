import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const CleanLayout = (): ReactElement => {
  return <Outlet />;
};

export default CleanLayout;