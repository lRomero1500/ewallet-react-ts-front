import { ReactElement } from "react";
export type SpanAtomProps = {
  children: React.ReactNode;
  className: string;
};

const SpanAtom = ({ children, className }: SpanAtomProps): ReactElement => {
  return (
    <>
      <span className={className}>{children}</span>
    </>
  );
};

export default SpanAtom;
