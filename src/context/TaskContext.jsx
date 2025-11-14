import { createContext, useState, useRef } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const searchRef = useRef("");

  function toggleComplete(task) {
    const updated = !task.completed;

    fetch(`http://localhost:6001/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: updated }),
    })
      .then((r) => r.json())
      .then((updatedTask) => {
        setTasks((prev) =>
          prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        );
      });
  }

  function addTask(task) {
    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((r) => r.json())
      .then((newTask) => {
        setTasks((prev) => [...prev, newTask]);
      });
  }

  const value = {
    tasks,
    setTasks,
    toggleComplete,
    addTask,
    searchRef,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
