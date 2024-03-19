export function ShowToDoItem(props) {
    let itemDetails = props.items;
    let markComplete = props.markAsComplete;
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='col-md-4'>
                    {/* <label> Here you will see the added Item : {formDetails.itemName} - {formDetails.priority}</label> */}
                    {itemDetails.map((item, index) => {
                        return (
                            <div
                                className={
                                    "badge mb-2 " +
                                    (item.completed
                                        ? " bg-success "
                                        : item.priority)
                                }
                                key={index}
                            >
                                {item.completed ? (
                                    <strike>{item.itemName}</strike>
                                ) : (
                                    item.itemName
                                )}
                                <div
                                    className='btn btn-light btn-sm ms-3'
                                    onClick={() => markComplete(index)}
                                >
                                    {item.completed ? "Completed" : "Done"}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
