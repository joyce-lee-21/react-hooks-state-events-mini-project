import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function onCategoryClick(category) {
    setCategory(category)
    let filteredTasks = [];
    if (category !== "All") {
      filteredTasks = tasks.filter((task) => {
        return task.category === category
      }) 
      setTasks(filteredTasks)
    } else {
      return setTasks(tasks)
    }
  }

  function onTaskFormSubmit(taskItem) {
    console.log(taskItem)
    setTasks([...tasks, taskItem])
    console.log(tasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryClick={onCategoryClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList key={tasks} tasks={tasks} category={category}/>
    </div>
  );
}

export default App;
