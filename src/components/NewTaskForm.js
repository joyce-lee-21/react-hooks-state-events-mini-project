import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [submittedTask, setSubmittedTask] = useState("")
  const [submittedCategory, setSubmittedCategory] = useState("Code")
  
  function handleTextInput(e) {
    setSubmittedTask(e.target.value)
    // console.log(e.target.value)
  }

  function handleOption(e) {
    setSubmittedCategory(e.target.value)
    // console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const taskItem = {
      text: submittedTask,
      category: submittedCategory
    }
    console.log(taskItem)
    onTaskFormSubmit(taskItem)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          onChange={handleTextInput}/>
      </label>
      <label>
        Category
        <select 
          name="category"
          onChange={handleOption}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            } else {
              return null
            }
          })}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task"
      />
    </form>
  );
}

export default NewTaskForm;
