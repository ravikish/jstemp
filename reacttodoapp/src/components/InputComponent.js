import React from "react";

function InputComponent({onInputChange}) {
    const handleChange = (event) => {
        onInputChange(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    );
}

export default InputComponent;