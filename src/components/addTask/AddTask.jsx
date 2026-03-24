const AddTask = ({handleSubmit,}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter task"  />
                <button>
                    +
                </button>
            </form>
        </div>
    )
}


export default AddTask