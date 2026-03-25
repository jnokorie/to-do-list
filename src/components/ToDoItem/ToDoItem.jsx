import './to-do-item.css'
import { FaTrash } from 'react-icons/fa'

const ToDoItem = ({ taskText, isChecked, onToggle, onDelete }) => {

    return (
        <div className="todoitem">
            <input className="checkbox" type="checkbox" checked={isChecked} onChange={onToggle} />
            <p className="task-text" style={{textDecoration: isChecked ? "line-through" : "none"}}>{taskText}</p>
            <FaTrash className="bin" onClick={onDelete}/>
        </div>

    )
}



export default ToDoItem