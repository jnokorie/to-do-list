import AddTask from "./components/addTask/AddTask"
import ToDoList from "./components/ToDoList/ToDoList"
import { useState } from "react"

import './App.css'

function App() {

  const [toDo, setToDo] = useState([])

  const handleDelete = ()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value) {
      const value = e.target[0].value
      setToDo([...toDo, value])
      console.log(toDo)
    }
    e.target.reset()
    return
  }

  return (
    <div className="container">
      <h2>My To-dos</h2>
      <AddTask handleSubmit={handleSubmit} />
      <ToDoList taskList={toDo} />
    </div>
  )
}

export default App
