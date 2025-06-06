import { useEffect, useState } from "react";
import "./TodoList.css";
import Swal from "sweetalert2";

const TodoList = ({ theme }) => {
  const [addValue, setAddValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handlerInput = (e) => {
    let { value } = e.target;
    setAddValue(value);
  };


  const handlerBtn = (e) => {
    e.preventDefault();
    if (addValue.trim() === "") {
      alert("Please enter a valid task");
      return;
    }
    const newUser = {
      id: Date.now(),
      task: addValue,
    };
    setTodoList([...todoList, newUser]);
    setAddValue("");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("todos")) || [];
    setTodoList(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);


  const taskDeleted = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    if (result.isConfirmed) {
      setTodoList((prevTodoList) =>
        prevTodoList?.filter((item) => item?.id !== id)
      );
    }
  };


  const editTask = async (data) => {
    let updateValue = await Swal.fire({
      title: "Edit your todo",
      input: "text",
      inputValue: data?.task,
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0080f8",
      background: "#000",
      color: "#fff",
      inputAttributes: {
        autocapitalize: "off"
      },
    })
    if (updateValue.isConfirmed && updateValue.value.trim() !== "") {
      setTodoList((prevTodoList) =>
        prevTodoList.map((todo) => (
          todo.id === data.id ? { ...todo, task: updateValue.value } : todo
        ))
      )
    }
  };

  return (
    <>
      <div className={theme ? "todo-list-dark" : "todo-list-light"}>
        <label htmlFor="task-input">What's on your list?</label>
        <div className="input-group">
          <input
            type="text"
            name="addValue"
            id="task-input"
            value={addValue}
            onChange={handlerInput}
            placeholder="Enter your task..."
          />
          <button
            className={theme ? "dark-clr" : "light-clr"}
            onClick={handlerBtn}
          >
            +
          </button>
        </div>
      </div>

      <div className="list">
        <ul>
          {todoList.map((list) => (
            <li key={list.id}>
              {list.task}
              <div className="list-btn">
                <button
                  className="dlt-btn"
                  onClick={() => taskDeleted(list.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="edit-btn" onClick={() => editTask(list)}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
