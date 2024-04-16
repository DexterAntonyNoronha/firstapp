import { AnswerComponent } from "./AnswerComponent";

export const QuestionComponent = ({ quizQuestion }) => {
    console.log(quizQuestion);
    let answers = quizQuestion.incorrect_answers;

    return (
        <>
            <div className='card'>
                <div className='card-body'>{quizQuestion.question}</div>
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
                quizAnswer={quizQuestion.correct_answer}
            ></AnswerComponent>
        </>
    );
};
