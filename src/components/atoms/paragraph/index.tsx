import { ReactElement } from "react";
export type ParagraphAtomProps = {
  children: React.ReactNode;
  className: string;
};

const ParagraphAtom = ({
  children,
  className,
}: ParagraphAtomProps): ReactElement => {
  return (
    <>
      <p className={className}>{children}</p>
    </>
  );
};

export default ParagraphAtom;
