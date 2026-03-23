

const ToDoItem = ({ taskText, isChecked, }) => {
    return (
        <div>
            <input type="checkbox" checked={isChecked} />
            <p>{taskText}</p>
            <p>-</p>
        </div>

    )
}



export default ToDoItem