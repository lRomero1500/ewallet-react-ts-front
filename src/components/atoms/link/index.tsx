import { HTMLAttributeAnchorTarget, ReactElement } from "react";
import { Link } from "react-router-dom";

export type LinkAtomProps = {
  children: React.ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
};

const LinkAtom = ({
  children,
  href,
  target,
  className,
}: LinkAtomProps): ReactElement => {
  return (
    <Link to={href} target={target ?? "_self"} className={className ?? ""}>
      {children}
    </Link>
  );
};

export default LinkAtom;
