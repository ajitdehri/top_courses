import React from "react";
import './Spinner.css'


const Spinner=()=>{
    return(
        <div className="flex flex-col item-center space-y-2">
            <div className="loader mt-52"></div>
            <p className="text-bgDark text-lg font-semibold"></p>
        </div>
    )
}

export default Spinner;