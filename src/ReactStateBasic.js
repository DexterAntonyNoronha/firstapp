import React, { useState } from 'react';

export function ReactStateBasic() {
    const [click, setClick] = useState([]);

    const addNumber = () => {
        setClick([
            ...click,
            {
                id: click.length,
                value: Math.floor(Math.random() * 100)
            }
        ]);
    };

    return (
        <div>
            <ul>
                {click.map(item => (
                    <div class="input-group">
                        <label className="input-group-text">{item.id}</label>
                        <input className="form-control" type="text" key={item.id} value={item.value}></input>
                    </div>
                ))}
            </ul>
            <button onClick={addNumber}>
                Click me
            </button>
        </div>
    );
} 