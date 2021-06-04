import React, { ReactElement } from 'react';


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

function index({className, text, children}: Props): ReactElement {
    return (
        <button className={`h-10 px-3 rounded-md ${className}`} >
            {text?text:children}
        </button>
    )
}

export default index;
