import { useState } from "react";
import "./Todo.css";
function Todo() {
  const [task, setTask] = useState([
    "make a discord app",
    "make a java-script chess game",
    "learn mern stack",
  ]);
  const [newTask, setNewTask] = useState("");
  function hundleInput(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() != "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updateTask = task.filter((elm , i)=> i!=index);
    setTask(updateTask); 
  }
  function moveUp(index) {
    if(index > 0){
        const updateTask = [...task];
        [updateTask[index], updateTask[index-1]]=
        [updateTask[index-1],updateTask[index]];
        setTask(updateTask);
    }
   
  }
  function moveDown(index) {
    if(index < task.length -1 ){
        const updateTask = [...task];
        [updateTask[index], updateTask[index+1]]=
        [updateTask[index+1],updateTask[index]];
        setTask(updateTask);
    }
   
  }

  return (
    <>
      <div className="todoContainer">
        <p className="todoList">Todo List Add</p>
        <div className="todoInputContainer">
          <input
            type="text"
            value={newTask}
            placeholder="Enter todo Tadk"
            className="todoTaskInput"
            onChange={hundleInput}
          />
          <button className="addTask" onClick={addTask}>
            add Task
          </button>
        </div>
        <div className="show_list">
          <ol className="list">
            {task.map((task, index) => (
              <li key={index} className="t-list">
                {task}
                <span>
                  <button
                    className="edit del"
                    onClick={() => deleteTask(index)}
                  >
                    ❌
                  </button>
                  <button className="edit moveup" onClick={() => moveUp(index)}>
                    👆
                  </button>
                  <button
                    className="edit movedown"
                    onClick={() => moveDown(index)}
                  >
                    👇
                  </button>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Todo;
