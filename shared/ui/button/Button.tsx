import { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";
import { Icon } from "../icon/Icon";
import { IconName, iconSizes } from "../icon/icon-constants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    iconName?: IconName;
}

export function Button({ children, iconName, className = "", ...props }: ButtonProps) {
    return (
        <button className={`button ${className}`} {...props}>
            {iconName && <Icon name={iconName} size={iconSizes.medium} />}
            {children && <span>{children}</span>}
        </button>
    );
}
