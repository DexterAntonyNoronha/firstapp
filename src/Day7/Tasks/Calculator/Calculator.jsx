import { useReducer } from "react";
import { CalcReducer } from "./CalcReducer";
import { initialValue } from "./CalcReducer";

export const Calculator = () => {
    const handleValueClick = (val) => {
        switch (val) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                dispatch({ type: "VALUE", value: val });
                break;
            case "+":
                dispatch({ type: "ADD", value: val });
                break;
            case "-":
                dispatch({ type: "SUBTRACT", value: val });
                break;
            case "X":
                dispatch({ type: "MULTIPLY", value: val });
                break;
            case "/":
                dispatch({ type: "DIVIDE", value: val });
                break;
            case "=":
                dispatch({ type: "EQUALS", value: val });
                break;
            case "C":
                dispatch({ type: "RESET", value: val });
                break;
            default:
                return calValue;
        }
    };

    const [calValue, dispatch] = useReducer(CalcReducer, initialValue);

    return (
        <>
            <div className='container '>
                <div className='col-md-4'>
                    <h2> Total : {calValue.totalVal}</h2>
                </div>
                <div className='card col-md-3'>
                    <div className='card-header'>Calculator</div>
                    <div className='card-body row'>
                        <div className='col-md-12'>
                            <input
                                className='col-md-12 form-control text-end'
                                type='text'
                                name='calcValue'
                                value={calValue.displayVal}
                                readOnly={true}
                            ></input>
                        </div>
                        <div className='col-md-12 m-2 row'>
                            <CalcButton
                                btnVlaue={9}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={8}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={7}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"/"}
                                special={true}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"C"}
                                reset={true}
                                clickFn={handleValueClick}
                            />
                        </div>
                        <div className='col-md-12 m-2 row'>
                            <CalcButton
                                btnVlaue={6}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={5}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={4}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"X"}
                                special={true}
                                clickFn={handleValueClick}
                            />
                        </div>
                        <div className='col-md-12 m-2 row'>
                            <CalcButton
                                btnVlaue={3}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={2}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={1}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"-"}
                                special={true}
                                clickFn={handleValueClick}
                            />
                        </div>
                        <div className='col-md-12 m-2 row'>
                            <CalcButton
                                btnVlaue={0}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"."}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"<-"}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"+"}
                                special={true}
                                clickFn={handleValueClick}
                            />
                            <CalcButton
                                btnVlaue={"="}
                                reset={true}
                                clickFn={handleValueClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const CalcButton = ({
    btnVlaue,
    special = false,
    reset = false,
    clickFn,
}) => {
    return (
        <div
            className={
                "col-md-2 btn me-1 " +
                (special
                    ? " btn-outline-info "
                    : reset
                    ? " btn-outline-danger "
                    : "btn-outline-secondary ")
            }
            onClick={(e) => clickFn(e.target.innerText)}
        >
            <span className='col-md-12'> {btnVlaue} </span>
        </div>
    );
};
