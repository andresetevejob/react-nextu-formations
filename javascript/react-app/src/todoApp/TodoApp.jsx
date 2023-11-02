import Todo from "./Todo";
import Form from "./Form";
import FilterButton  from "./FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

const TASKS = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
]
function TodoApp() {
  const [tasks,setTasks] = useState(TASKS)
  const addTask = eName => {
    console.group(eName);
    const newTask = { id: `todo-${nanoid()}`,name: eName, completed: false };
    setTasks([...tasks,newTask])
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       { tasks?.map((task)=> 
          (<Todo 
            completed={task.completed} 
            id={task.id} 
            name={task.name}
            key={task.id}
            />)
          ) 
       }
      </ul>
    </div>
  );
}
export default TodoApp;