import "./App.css";
import { FirstPage } from "./ReactFirstPage";

function App() {
    const expression = " Expression";
    const conditionalExpression = "JSX with Conditional Expressions";
    let i = 1;

    const blueBackground = "bg-info p-2";
    const redBackground = "bg-danger p-2";

    return (
        <div className='App'>
            <div class='card mb-4'>
                {/* A general JSX */}
                <h2>This is a general JSX Expressions Example</h2>

                {/** A JSX with expressions syntax */}
                <h3>
                    This is an example of a generic
                    <b>
                        <u>{expression}</u>
                    </b>
                </h3>

                {/** A JSX with conditional expressions */}
                <h3>{i === 1 ? "This is a " + conditionalExpression : ""}</h3>

                {/** A JSX with Comments */}
                <span>
                    {/* This is a sample comment */} This div have a comment in
                    place. The comments are hidden
                </span>
            </div>

            <div className='card'>
                <div className='card-header text-light'>
                    <span className={redBackground}>
                        I am having a red background color{" "}
                    </span>
                </div>
                <div class='card-header text-light'>
                    <span className={blueBackground}>
                        I am having a blue background color{" "}
                    </span>
                </div>
            </div>

            <FirstPage></FirstPage>
        </div>
    );
}

export default App;
