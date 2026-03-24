import './to-do-item.css'
import { FaTrash } from 'react-icons/fa'
import {useState} from "react"

const ToDoItem = ({ taskText }) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e) =>{
        setIsChecked(e.target.checked)
    }

    return (
        <div className="todoitem">
            <input className="checkbox" type="checkbox" onChange={handleChange} />
            <p className="task-text" style={{textDecoration: isChecked ? "line-through" : "none"}}>{taskText}</p>
            <FaTrash className="bin"/>
        </div>

    )
}



export default ToDoItem