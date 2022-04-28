import ToDoListInput from "./ToDoListInput";
import ToDoListDisplay from "./ToDoListDisplay";
import { useState } from "react";

const ToDoList = () => {
  const [toDoArray, setToDoArray] = useState([]);

  function addToDo(value){
    let maxId = 0;

    toDoArray.forEach(row => {
      if(row.id > maxId){
        maxId = row.id;
      }
    });

    const newToDoList = toDoArray.slice();

    newToDoList.push({
      id: maxId + 1,
      value: value,
      mark: false,
    });

    setToDoArray(newToDoList);
  }

  function toggleToDo(id){
    const newToDoList = toDoArray.slice();
    const toggledRow = newToDoList.filter(row => row.id === id)[0];

    toggledRow.mark = !toggledRow.mark;

    setToDoArray(newToDoList);
  }

  return (
    <div>
      <ToDoListInput inputCallback={addToDo} />
      <ToDoListDisplay list={toDoArray} toggleMark={toggleToDo}/>
    </div>
  )
}

export default ToDoList