import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

function App() {
  const {tasks, setTasks} = useContext(TaskContext);

  useEffect(() => {
    fetch(`http://localhost:6001/tasks`)
    .then((r)=>r.json())
    .then(data=>setTasks(data))
    
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <TaskList />
    </div>
  );
}

export default App;




