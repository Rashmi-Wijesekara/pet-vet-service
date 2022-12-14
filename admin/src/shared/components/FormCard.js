import React from "react";

const FormCard = props => {
    return (
        <div className={`p-10 bg-white rounded-xl max-w-sm mx-auto shadow-wrapper ${props.className}`}>
            {props.children}
        </div>
    );
};

export default FormCard;