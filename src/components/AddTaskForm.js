import React from "react";

function AddTaskForm(handleSubmit, newTask, handleInputChange) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="newitem">Add to todo list</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default AddTaskForm;
