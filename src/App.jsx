import AddTask from "./components/addTask/AddTask"
import ToDoList from "./components/ToDoList/ToDoList"
import { useState } from "react"

import './App.css'

function App() {

  const [toDo, setToDo] = useState([])


  let allTasks = []
  const getAllTasks = () => {
    fetch("http://localhost:3000/all-tasks", {
      Method: 'GET',
      Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) =>
        {console.log(data)
        setToDo([...toDo, ...data])})
  }




  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value) {
      const value = e.target[0].value
      setToDo((prevToDo) => [...prevToDo, {
        id: crypto.randomUUID(),
        text: value,
        completed: false,
      }])
    }
    e.target.reset()
    return
  }

  const handleDelete = (id) => {
    setToDo((prevToDo) => prevToDo.filter((item) => item.id !== id))
  }

  const handleToggle = (id) => {
    setToDo((prevToDo) =>
      prevToDo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }


  return (
    <div className="container">
      <div className="title">
        <h2>My To-dos</h2>
        <button className="button" onClick={getAllTasks}>Get All Tasks</button>
        <button className="button" onClick={() => setToDo([])}>Reset</button>
      </div>
      <AddTask handleSubmit={handleSubmit} />
      <ToDoList taskList={toDo} handleDelete={handleDelete} handleToggle={handleToggle} />
    </div>
  )
}

export default App
