const add = (a, b) => {
    return Number(a) + Number(b);
};

const subtract = (a, b) => {
    return Number(a) - Number(b);
};

const multiply = (a, b) => {
    console.log(a, b);
    return Number(a) * Number(b);
};

const divide = (a, b) => {
    return Number(a) / Number(b);
};

export const initialValue = {
    currentAction: "",
    currVal: "",
    totalVal: 0,
    displayVal: "",
    prevAction: "",
};

const doAction = (info) => {
    if (!info.totalVal) return info.currVal;
    switch (info.type) {
        case "ADD":
            return add(info.totalVal, info.currVal);
        case "SUBTRACT":
            return subtract(info.totalVal, info.currVal);
        case "MULTIPLY":
            return multiply(info.totalVal, info.currVal);
        case "DIVIDE":
            return divide(info.totalVal, info.currVal);
        default:
            return info.totalVal;
    }
};

export const CalcReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                displayVal: state.displayVal + action.value,
                totalVal: doAction({
                    type: state.prevAction ? state.prevAction : "ADD",
                    currVal: state.currVal,
                    totalVal: state.totalVal,
                }),
                currVal: "0",
                prevAction: "ADD",
            };
        case "SUBTRACT":
            return {
                ...state,
                displayVal: state.displayVal + action.value,
                totalVal: doAction({
                    type: state.prevAction ? state.prevAction : "SUBTRACT",
                    currVal: state.currVal,
                    totalVal: state.totalVal,
                }),
                currVal: "0",
                prevAction: "SUBTRACT",
            };
        case "EQUALS":
            return {
                ...state,
                displayVal: "",
                totalVal: doAction({
                    type: state.prevAction ? state.prevAction : "EQUALS",
                    currVal: state.currVal,
                    totalVal: state.totalVal,
                }),
                prevAction: "",
                currVal: "0",
            };
        case "VALUE":
            return {
                ...state,
                displayVal: state.displayVal + action.value,
                currVal: state.currVal + action.value,
            };
        case "MULTIPLY":
            return {
                ...state,
                displayVal: state.displayVal + action.value,
                totalVal: doAction({
                    type: state.prevAction ? state.prevAction : "MULTIPLY",
                    currVal: state.currVal,
                    totalVal: state.totalVal,
                }),
                currVal: "0",
                prevAction: "MULTIPLY",
            };
        case "DIVIDE":
            return {
                ...state,
                displayVal: state.displayVal + action.value,
                totalVal: doAction({
                    type: state.prevAction ? state.prevAction : "DIVIDE",
                    currVal: state.currVal,
                    totalVal: state.totalVal,
                }),
                currVal: "0",
                prevAction: "DIVIDE",
            };
        case "RESET":
            return initialValue;
        default:
            return state;
    }
};
