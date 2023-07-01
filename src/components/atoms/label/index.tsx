import { ReactElement } from "react";

export type LabelAtomProps = {
  text: string;
  htmlFor?: string;
  className?: string;
};

const LabelAtom = ({
  text,
  htmlFor,
  className,
}: LabelAtomProps): ReactElement => {
  return (
    <label htmlFor={htmlFor ?? ""} className={className ?? ""}>
      {text}
    </label>
  );
};

export default LabelAtom;
