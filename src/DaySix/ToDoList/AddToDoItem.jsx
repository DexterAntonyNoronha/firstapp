import { useState } from "react";
import { ShowToDoItems } from "./ShowTodoItems";

export function ToDoList() {
    const [itemInfo, setItemInfo] = useState([]);

    const InitialState = {
        todoItem: "",
        priority: "",
    };

    const [itemDetails, setItemDetails] = useState(InitialState);

    const getItemName = (e) => {
        //setItemName(e.target.value);

        let inputInfo = e.target.name;
        let inputVal = e.target.value;

        let className = "bg-primary";

        switch (inputVal) {
            case "Normal":
                className = "bg-primary";
                break;
            case "High Priority":
                className = "bg-danger";
                break;
            case "Medium Priority":
                className = "bg-warning";
                break;
            default:
                className = inputVal;
                break;
        }

        setItemDetails({
            ...itemDetails,
            [inputInfo]: className,
        });
    };

    const addItem = (e) => {
        //if (!itemName) return;
        let a = [...itemInfo];
        a.push(itemDetails);
        setItemDetails(InitialState);
        setItemInfo(a);
    };

    const removeItem = (e) => {
        let todoItems = [...itemInfo];
        // todoItems.splice(e, 1);
        // setItemInfo(todoItems);
        todoItems[e].completed = true;
        setItemInfo(todoItems);
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h3>To Do List </h3>{" "}
                </div>
                <div className='card-body'>
                    <div className='col-md-6 input-group'>
                        <label className='input-group-text'>Add an Item:</label>
                        <input
                            type='text'
                            name='todoItem'
                            className='form-control'
                            onChange={getItemName}
                        ></input>
                        <label className='input-group-text'>Priority:</label>
                        <select
                            className='form-control'
                            name='priority'
                            onChange={getItemName}
                        >
                            <option>Normal</option>
                            <option>High Priority</option>
                            <option>Medium Priority</option>
                        </select>
                        <div
                            className='btn btn-sm btn-secondary '
                            onClick={addItem}
                        >
                            + Add Item
                        </div>
                    </div>
                    <ShowToDoItems itemInfo={itemInfo} removeToDoItem={removeItem} />
                </div>
            </div>
        </div>
    );
}
