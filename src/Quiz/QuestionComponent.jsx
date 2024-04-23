import { AnswerComponent } from "./AnswerComponent";
import { useContext } from "react";
import { QuizContext } from "./QuizStates";

export const QuestionComponent = () => {
    //console.log(quizQuestion);
    const [state, dispatch] = useContext(QuizContext);

    let quizQuestion = state.Questions;
    let answers = quizQuestion[state.currentQuestionIndex].incorrect_answers;
    let actualQuestion = quizQuestion[state.currentQuestionIndex].question;
    return (
        <>
            <div className='card'>
                <div className='card-body'>{actualQuestion}</div>
            </div>
            {/* <AnswerComponent></AnswerComponent>
            <AnswerComponent></AnswerComponent>
            <AnswerComponent></AnswerComponent>
            <AnswerComponent></AnswerComponent> */}
            {answers.map((answer, index) => {
                return (
                    <AnswerComponent
                        quizAnswer={answer}
                        key={index}
                    ></AnswerComponent>
                );
            })}
            <AnswerComponent
                quizAnswer={
                    quizQuestion[state.currentQuestionIndex].correct_answer
                }
            ></AnswerComponent>
        </>
    );
};
