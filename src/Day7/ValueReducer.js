export const valueReducer = (state, action) => {
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
