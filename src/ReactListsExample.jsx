import React from "react";
import { ReactStateExample } from "./ReactStateExample";
import { ReactStateBasic } from "./ReactStateBasic";

//props
//props.menuname
export function ReactListExample({menuItems, fromChildFunction}) {
    // props = {menuItems: ['Home', 'About Us', 'Contact US', 'Gallery']}
    const numbers = menuItems;

    const style={
        color: "blue"
    }

    const updatedNums = numbers.map((num, index) => {
        return <li key={num.toString()}>{num}</li>;
    });

    return (
        <>
            <h4 style={style}>React List Example</h4>
            <ul>
                {updatedNums}
            </ul>

            {/* <button onClick={fromChildFunction}>Call the parent</button> */}
            <ReactStateExample></ReactStateExample>
            {/* <hr/> */}

            {/* <ReactStateBasic/> */}
        </>
    )

}