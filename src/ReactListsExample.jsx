import { useState } from "react";
import { ReactStateExample } from "./ReactState/ReactStateExample";

//props
//props.menuname
export function ReactListExample({ menuItems, fromChildFunction }) {
    // props = {menuItems: ['Home', 'About Us', 'Contact US', 'Gallery']}
    const numbers = menuItems;
    const [selected, setSelected] = useState("");

    const style = {
        color: "blue"
    }



    const updatedNums = numbers.map((num, index) => {
        return <li className="alert badge me-2 btn btn-secondary " key={num.toString()} onClick={() => setSelected(num)}>{num}</li>;
    });

    return (
        <>
            <div className="card mb-3">
                <div className="card-header text-center fw-bold ">Llist Props Example </div>
                <div className="card-body">
                    <h4 style={style}>React List Example</h4>
                    <ul>
                        {updatedNums}
                    </ul>
                </div>
                <div className="card-footer">The selected Menu Item is : <b class="badge rounded-pill bg-secondary ">{selected}</b></div>
            </div>
            {/* <button onClick={fromChildFunction}>Call the parent</button> */}
            <ReactStateExample></ReactStateExample>

        </>
    )

}