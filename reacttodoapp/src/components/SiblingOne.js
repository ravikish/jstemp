import React from "react";

function SiblingOne({sharedValue, setSharedValue}) {
    const handleChange = (event) => {
        setSharedValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={sharedValue} onChange={handleChange}></input>
        </div>
    );
}

export default SiblingOne;