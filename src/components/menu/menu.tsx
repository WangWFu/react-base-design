import React from "react";
import classNames from "classnames";

type mode = "horizontal" | "vertical";
export interface MenuProps {
  mode?: mode;
  classNmae?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const menu: React.FC<MenuProps> = (props) => {
  const { children, classNmae, mode, ...rest } = props;
  const classes = classNames("menu", classNmae, {
    [`menu-${mode}`]: mode,
  });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default menu;
