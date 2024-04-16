import { QuizContext } from "./Contexts/Quiz";
import { QuestionComponent } from "./QuestionComponent";
import { useContext } from "react";

export const QuizMainComponent = () => {
    const [state, dispatch] = useContext(QuizContext);

    return (
        <>
            <div className='container'>
                <div className='card col-md-12'>
                    <div className='card-header text-center fw-bold'>
                        QUESTION ({state.currentQuestionIndex + 1} /{" "}
                        {state.totalQuestions})
                    </div>
                </div>
                <div className='card'>
                    <QuestionComponent></QuestionComponent>
                </div>
                <div className='card'>
                    <div className='card-footer text-center'>
                        <div
                            className='btn btn-outline-primary'
                            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                        >
                            Next Question
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
