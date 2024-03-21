export const Calculator = () => {
    const handleValueClick = (val) => {
        console.log(val);
    };

    return (
        <>
            <div className='container col-md-3'>
                <div className='card'>
                    <div className='card-header'>Calculator</div>
                    <div className='card-body row'>
                        <div className='col-md-12'>
                            <input
                                className='col-md-12 form-control text-end'
                                type='text'
                                name='calcValue'
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
