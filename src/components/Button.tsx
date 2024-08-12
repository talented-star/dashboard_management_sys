import React from "react";
import { ButtonProps } from "../app/subscription/components/MockDataType";
const Button:React.FC<ButtonProps> = ({title, className}) => {
    return (
        <button className={`shadow-md py-[6px] px-3 rounded-[4px] hover:shadow-lg hover:bg-gray-200 ${className}`}>
            <strong>{title}</strong>
        </button>
    )
}

export default Button;