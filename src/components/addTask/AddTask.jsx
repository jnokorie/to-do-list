import { FaPlus } from 'react-icons/fa'
import "./add-task.css"

const AddTask = ({handleSubmit,}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="input-wrapper">
                <input className="input" placeholder="Add a task..." >
                </input>
                <button className="button">
                   <FaPlus/>
                </button>
            </form>
        </div>
    )
}


export default AddTask