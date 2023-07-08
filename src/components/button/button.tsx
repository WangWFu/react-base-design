import React from "react";
import classnames from "classnames";
type ButtonSize = "lg" | "sm";
const ButtonTypes = ["default", "primary", "ghost", "dashed", "link", "text"] as const;
type ButtonType = (typeof ButtonTypes)[number];

interface baseButtonProps {
  className?: string;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  href?: string;
  children?: React.ReactNode;
}
export type NavtiveButtonProps = baseButtonProps & React.ButtonHTMLAttributes<HTMLElement | HTMLButtonElement>;
export type AnchorButtonProps = baseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>;
export type ButtonProps = Partial<NavtiveButtonProps | AnchorButtonProps>;
export const Button: React.FC<ButtonProps> = (props) => {
  const { type, disabled, size, children, className, href, ...reset } = props;

  const classes = classnames("btn", className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: disabled,
  });
  if (type === "link" && href) {
    return (
      <a href={href} className={classes} {...reset}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...reset}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  type: "default",
};
export default Button;
