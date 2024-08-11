import React from "react";
import { ButtonProps } from "./MockDataType";
const Button:React.FC<ButtonProps> = ({title}) => {
    return (
        <button className="shadow-md py-[6px] px-3 rounded-[4px] hover:shadow-lg hover:bg-gray-200">
            <strong>{title}</strong>
        </button>
    )
}

export default Button;