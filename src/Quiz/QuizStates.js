import { createContext, useReducer } from "react";
import { Questions } from "../assets/QuizData.js";

export const initialState = {
    currentQuestionIndex: 0,
    Questions: Questions.results,
    totalQuestion: Questions.results.length,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "NEXT_QUESTION":
            if (state.currentQuestionIndex >= state.totalQuestion - 1) {
                return state;
            }
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            };
        default:
            return state;
    }
};

/*export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};*/

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState); //value => [state, dispatch]
    return (
        <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
    );
};
