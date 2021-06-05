import React, { ReactElement } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

function index({ className, text, children, ...props }: Props): ReactElement {
  return (
    <button {...props} className={`h-10 px-3 rounded-md ${className}`}>
      {text ? text : children}
    </button>
  );
}

export default index;
