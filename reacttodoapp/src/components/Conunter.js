// Use state in functinoal components
import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => 
                setCount(count + 1)
            }>clicked Me</button>
        </div>
    );
}

export default Counter;