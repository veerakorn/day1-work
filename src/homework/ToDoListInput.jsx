import { useState } from "react";

const ToDoListInput = ({inputCallback}) => {
  const [toDoValue, setToDoValue] = useState("");

  function addButtonClicked(e){
    var value = toDoValue.trim();

    if(value !== ""){
      inputCallback(value);
      setToDoValue('');
    }
  }

  return (
    <div>
      <input type="text" value={toDoValue} onChange={(e) => setToDoValue(e.target.value)}/>
      <button type="button" onClick={addButtonClicked}>Add</button>
    </div>
  )
}

export default ToDoListInput