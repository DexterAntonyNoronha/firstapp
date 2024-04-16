import { createContext, useReducer } from "react";
import { Questions } from "../../assets/Quiz";

const initialState = {
    currentQuestionIndex: 0,
    Questions: Questions.results,
    totalQuestions: 10,
    showResults: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "NEXT_QUESTION":
            const showResults =
                state.currentQuestionIndex === state.Questions.length - 1;
            if (state.currentQuestionIndex >= state.totalQuestions) {
                return state;
            }
            const currentQuestionIndex = showResults
                ? state.currentQuestionIndex
                : state.currentQuestionIndex + 1;
            return {
                ...state,
                currentQuestionIndex: currentQuestionIndex,
                totalQuestions: 10,
                showResults,
            };
        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};
