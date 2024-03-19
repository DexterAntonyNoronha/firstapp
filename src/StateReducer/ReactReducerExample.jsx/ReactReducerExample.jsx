import { useReducer } from "react";

export function ReactReducerExample() {

    const valueReducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return {
                    ...state,
                    name: "Increment",
                    points: state.points + 20
                }
            default:
                return "This is default"
        }
    }

    const initialValue = {
        name: "",
        points: 0
    };

    const [state, dispatch] = useReducer(valueReducer, initialValue);

    return (
        <>
            <h4>This is an example for the Use Reducer Hook</h4>
            <div className="btn btn-sm" onClick={() => dispatch({ type: "Increment" })}>Click to change name</div>
            <h3> {state.name} and the points : {state.points} </h3>
        </>
    );
}