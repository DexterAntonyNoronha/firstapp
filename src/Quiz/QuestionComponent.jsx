import { useContext } from "react";
import { AnswerComponent } from "./AnswerComponent";
import { QuizContext } from "./Contexts/Quiz";

export const QuestionComponent = () => {
    const [state, dispatch] = useContext(QuizContext);

    let currentQuestion = state.Questions[state.currentQuestionIndex].question;
    return (
        <div className='card'>
            <div className='card-header'>{currentQuestion}</div>
            <div className='card-body row p-3'>
                <AnswerComponent />
                <AnswerComponent />
                <AnswerComponent />
                <AnswerComponent />
            </div>
        </div>
    );
};
