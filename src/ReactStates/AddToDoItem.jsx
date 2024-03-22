import { useState } from "react";
import { ShowToDoItem } from "../ReactStates/ShowTodoItems";

export function ReactMultiStateExample() {
    const initialState = { itemName: "", priority: "Normal" };

    const [formDetails, setFormDetails] = useState(initialState);
    const [itemDetails, setItemDetails] = useState([]);

    const handleItemName = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        let className = "bg-primary";

        switch (fieldValue) {
            case "Normal":
                className = "bg-primary";
                break;
            case "Medium":
                className = "bg-warning";
                break;
            case "High":
                className = "bg-danger";
                break;
            default:
                className = fieldValue;
                break;
        }

        setFormDetails({
            ...formDetails,
            [fieldName]: className,
            // itemName: e.target.value,
        });
    };

    /* const handlePriority = (e) => {

        setFormDetails({
            ...formDetails,
            priority: e.target.value
        });
    } */

    const addItem = () => {
        //formDetails
        let toDoItem = [...itemDetails];
        toDoItem.push(formDetails);
        setItemDetails(toDoItem);
        setFormDetails(initialState);
    };

    const markComplete = (index) => {
        let toDoItems = [...itemDetails];
        toDoItems[index].completed = true;
        setItemDetails(toDoItems);
    };

    return (
        <>
            <div className='card'>
                <div className='card-header text-center'>
                    <h3>To Do App</h3>
                </div>
                <div className='card-body'>
                    <div className='input-group'>
                        <label className='input-group-text'>Item Name</label>
                        <input
                            className='form-control'
                            type='text'
                            name='itemName'
                            onChange={handleItemName}
                        ></input>
                        <label className='input-group-text'>Priority</label>
                        <select
                            className='form-control'
                            type='text'
                            name='priority'
                            onChange={handleItemName}
                        >
                            <option>Normal</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        <div
                            className='btn btn-sm btn-secondary'
                            onClick={addItem}
                        >
                            {" "}
                            + Add Item
                        </div>
                    </div>
                </div>
            </div>
            {itemDetails.length > 0 && (
                <ShowToDoItem
                    items={itemDetails}
                    markAsComplete={markComplete}
                ></ShowToDoItem>
            )}
        </>
    );
}
