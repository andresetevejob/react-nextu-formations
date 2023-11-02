import React from "react";
import {useRef} from "react";

function Form(props) {
  const name = useRef();  
  const handleSubmit = e=>{
    e.preventDefault();
    props.addTask(name.current.value)
    name.current.value ="";
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        ref={name}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;