import { useReducer } from "react";

export function ReactUseReducerExample() {
    const valueReducer = (state, action) => {
        switch (action) {
            case "SHOW":
                return true;
            case "HIDE":
                return false;
            default:
                return state;
        }
    };

    const initialValue = true;

    const [state, dispatch] = useReducer(valueReducer, initialValue);

    return (
        <>
            <h3>Example of useReducer</h3>
            <div>
                {" "}
                The status is : {state === true ? "SHOWING NOW" : "HIDING"}
            </div>
            <div className='btn btn-dark' onClick={() => dispatch("HIDE")}>
                Show
            </div>
            <div className='btn btn-dark' onClick={() => dispatch("SHOW")}>
                HIDE
            </div>
        </>
    );
}
