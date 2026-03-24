import ToDoItem from "../ToDoItem/ToDoItem"

const ToDoList = ({ taskText, taskList, isChecked }) => {

    const mappedList = taskList.map((item, index) => {
        <li>
            <ToDoItem taskText={item} />
        </li>
    })

    return (
        <div>
            <ul>

            </ul>
        </div>
    )
}

export default ToDoList