import { useReducer } from "react";
import { valueReducer } from "./ValueReducer";
// import { ReducerBasicExample } from "./ReducerBasicExample";

export function ReactReducerExample() {
    /* const valueReducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return {
                    ...state,
                    name: action.nameVal,
                    points: state.points + action.value,
                };
            case "Decrement":
                return {
                    ...state,
                    points: state.points - 10,
                };
            default:
                return "This is default";
        }
    };
 */
    const initialValue = {
        name: "",
        points: 0,
    };

    const [state, dispatch] = useReducer(valueReducer, initialValue);

    return (
        <>
            {/* <ReducerBasicExample></ReducerBasicExample> */}
            <hr />
            <hr />
            <h4>This is an example for the Use Reducer Hook</h4>
            <div
                className='btn btn-sm'
                onClick={() =>
                    dispatch({
                        type: "Increment",
                        value: 40,
                        nameVal: "Add Now",
                    })
                }
            >
                Click to change name
            </div>
            <div
                className='btn btn-sm'
                onClick={() => dispatch({ type: "Decrement" })}
            >
                Click to change name
            </div>
            <h3>
                {" "}
                {state.name} and the points : {state.points}{" "}
            </h3>
        </>
    );
}
