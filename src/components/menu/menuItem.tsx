import React from "react";
import classNames from "classnames";

export interface MenuItemProps {
  classNmae?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, classNmae, ...reset } = props;
  const classes = classNames("menuItem", classNmae);
  return (
    <div className={classes} {...reset}>
      {children}
    </div>
  );
};

export default MenuItem;
