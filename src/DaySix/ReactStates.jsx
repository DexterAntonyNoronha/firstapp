import { useState } from "react";

export function ReactMultiStateExample() {
    const InitialValue = {
        score: 0,
        multiple: 10,
        addAndShow: 1,
    };

    const [multiVales, setMultiValues] = useState(InitialValue);

    const handleClick = (event) => {
        let innerText = event.target.innerText;
        if (innerText === "Increment Score") {
            setMultiValues({
                score: multiVales.score + 1,
                multiple: multiVales.multiple,
                addAndShow: multiVales.addAndShow,
            });
        } else if (innerText === "Multiply Number") {
            setMultiValues({
                score: multiVales.score,
                multiple: multiVales.multiple * 2,
                addAndShow: multiVales.addAndShow,
            });
        } else {
            setMultiValues({
                score: multiVales.score,
                multiple: multiVales.multiple,
                addAndShow: multiVales.addAndShow + 10,
            });
        }
    };

    return (
        <>
            <div className='card'>
                <div className='card-header'>Multi State Example</div>
                <div className='card-body'>
                    <div
                        className='btn btn-sm col-md-2 btn-outline-primary'
                        onClick={handleClick}
                    >
                        Increment Score
                    </div>
                    <div
                        className='btn btn-sm col-md-2 btn-outline-primary'
                        onClick={handleClick}
                    >
                        Multiply Number
                    </div>
                    <div
                        className='btn btn-sm col-md-2 btn-outline-primary'
                        onClick={handleClick}
                    >
                        Add 20 and show Score
                    </div>

                    <div className='input-group'>
                        <h2 className='input-group-text'>{multiVales.score}</h2>
                        <h2 className='input-group-text'>
                            {multiVales.multiple}
                        </h2>
                        <h2 className='input-group-text'>
                            {multiVales.addAndShow}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
