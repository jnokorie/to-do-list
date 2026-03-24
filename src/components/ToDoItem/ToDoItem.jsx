import './to-do-item.css'
import { FaTrash } from 'react-icons/fa'

const ToDoItem = ({ taskText, isChecked, }) => {
    return (
        <div className="todoitem">
            <input type="checkbox" checked={isChecked} />
            <p className="task-text">{taskText}</p>
            <FaTrash/>
        </div>

    )
}



export default ToDoItem