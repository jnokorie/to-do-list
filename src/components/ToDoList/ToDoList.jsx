import ToDoItem from "../ToDoItem/ToDoItem"
import "./to-do-list.css"

const ToDoList = ({ taskList, handleDelete, handleToggle }) => {

    const mappedList = taskList.map((item) => {
        return (
            <li className="list-item" key={item.id}>
                <ToDoItem
                    taskText={item.text}
                    isChecked={item.completed}
                    onToggle={() => handleToggle(item.id)}
                    onDelete={() => handleDelete(item.id)}
                />
            </li>
        )
    })

    return (
        <div>
            <ul className="list-container">
                {mappedList}
            </ul>
        </div>
    )
}

export default ToDoList