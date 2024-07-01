import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";

function ComponentA() {
    const {globalValue, setGlobalValue} = useContext(GlobalContext);
    return (
        <div>
            <p>ComponentA: {globalValue}</p>
            <button onClick={()=>
                setGlobalValue('Updated from Component A')
            }>Update</button>
        </div>
    );
}

export default ComponentA;