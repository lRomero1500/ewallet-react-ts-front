import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginView, RegisterView } from "../auth/pages";
import CleanLayout from "../../layouts/clean";

const App = (): ReactElement => {
  return (
    <>
      <Routes>
        <Route element={<CleanLayout />}>
          <Route path="/" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
