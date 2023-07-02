import { ReactElement } from "react";

type ProviderProps = {
  children: ReactElement;
};

const MyProvider = ({ children }: ProviderProps): ReactElement => {
  return <>{children}</>;
};

export default MyProvider;