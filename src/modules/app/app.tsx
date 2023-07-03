import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../../layouts/auth";
import DashboardLayout from "../../layouts/dashboard";
import SignInPage from "../auth/pages/sign-in";
import SignUpPage from "../auth/pages/sign-up";

const App = (): ReactElement => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
