import ToDoItem from "../ToDoItem/ToDoItem"
import "./to-do-list.css"

const ToDoList = ({ taskList }) => {

    const mappedList = taskList.map((item, index) => {
        return (
            <li className="list-item" key={index}>
                <ToDoItem taskText={item} />
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