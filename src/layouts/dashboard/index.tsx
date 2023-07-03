import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = (): ReactElement => {
  return <Outlet />;
};

export default DashboardLayout;
