import { QuestionComponent } from "./QuestionComponent";
import { Questions } from "../assets/QuizData.js";
import { useReducer, useState } from "react";
import { reducer, initialState } from "./QuizStates.js";

export const QuizComponent = () => {
    let quizQuestions = Questions.results;
    //let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div className='container'>
                <div className='card col-md-12'>
                    <div className='card-header text-center fw-bold'>
                        QUESTION ({state.currentQuestionIndex + 1} /{" "}
                        {quizQuestions.length})
                    </div>
                </div>
                <div className='card'>
                    <QuestionComponent
                        quizQuestion={quizQuestions[state.currentQuestionIndex]}
                    ></QuestionComponent>
                </div>
                <div className='card'>
                    <div className='card-footer text-center'>
                        <div
                            className='btn btn-outline-primary'
                            onClick={() =>
                                /* setCurrentQuestionIndex(
                                    currentQuestionIndex + 1
                                ) */
                                dispatch({ type: "NEXT_QUESTION" })
                            }
                        >
                            Next Question
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
