import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";

function ComponentB() {
    const {globalValue} = useContext(GlobalContext);

    return (
        <div>
            <p>ComponentB : {globalValue}</p>
        </div>
    );
}

export default ComponentB;