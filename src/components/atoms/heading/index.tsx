import { ReactElement } from "react";
export type HeadingAtomProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className: string;
};

const HeadingAtom = ({
  level,
  children,
  className,
}: HeadingAtomProps): ReactElement => {
  const Tag = `h${level}`;
  return <Tag className={className ?? ""}>{children}</Tag>;
};
export default HeadingAtom;
