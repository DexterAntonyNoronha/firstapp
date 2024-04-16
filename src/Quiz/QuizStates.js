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
