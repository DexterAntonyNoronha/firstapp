export function ShowToDoItems({ itemInfo, removeToDoItem }) {
    return (<div className='mt-4 card'>
        <div className='card-header'>To Do Items</div>
        <div className='card-body row'>
            {itemInfo.map((item, index) => {
                return (
                    <div className='input-group' key={index}>
                        <div className={
                            item.priority +
                            " badge text-light bg-primary mb-1 p-2"
                        }
                        >
                            {item.completed ? <strike>{item.todoItem}</strike> : item.todoItem}
                            <span className={!item.completed ? 'btn badge bg-light text-dark ms-3' : 'btn badge bg-success text-light ms-3'} onClick={() => removeToDoItem(index)} data-index={index}>
                                {item.completed ? 'Complete' : 'Done'}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>);
}