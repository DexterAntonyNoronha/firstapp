import React from "react";
import { ReactListExample } from "./ReactListsExample";

export function FirstPage() {
    let title = "This is my first app!"; // Attributes

    const items = ['Home', 'About Us', 'Contact US', 'Gallery'];
    const numbers = [1, 2, 3, 4, 5];

    const fromChild = () => {
        console.log("This is called from Child");
    }

    /**
     * function fromChild() {
     *  console.log("This is called from Child");
     * }
     */

    return (
        <>
            {/* {numbers.map((x => <h2 key={x}>{x}</h2>))} */}

            {/* Expressions example - wrapped using curly braces {} */}
            <h1>This is First Page File - {title}</h1>

            {/* Here we are injecting another component to the main page */}
            <ReactListExample menuItems={items} fromChildFunction={fromChild}></ReactListExample>
            {/* <ReactListExample/> */}
        </>
    );
}
