import { useDispatch, useSelector } from "react-redux";
import { addTodoList, removeToDolist, moveUp, moveDown } from "../reduxFile/toDo-slice/toDoSlice.js";
import { setDateVal, setTodoVal } from "../reduxFile/toDo-slice/inputVal.js";

const ToDoList = () => {
  const toDo = useSelector((state) => state.toDoList);
  const toDoVal = useSelector((state) => state.inputValTodo.toDoVal)
  const dateVal = useSelector((state) => state.inputValTodo.dateVal)  
  const dispatch = useDispatch();

  const renderTodoList = toDo.map((arr, index) => (
    <li className="d-flex justify-content-between" key={index}>
      <div className="d-flex flex-row gap-3">
        <p>{arr.toDo}</p>
        <p>{arr.date}</p>
      </div>
      <div className="d-flex flex-row gap-1">
        <button onClick={() => dispatch(moveUp(index))}>Up</button>
        <button onClick={() => dispatch(moveDown(index))}>Down</button>
        <button onClick={() => dispatch(removeToDolist(index))}>Delete</button>
      </div>
    </li>
  ))

  return (
    <section className="toDoList d-inline-flex flex-column gap-2 p-3 m-2 rounded">
      <h1 className="text-center">ToDo List</h1>
      <div className="inputTodo mb-2">
        <input value={toDoVal} onChange={(e) => dispatch(setTodoVal(e.target.value))} className="border-0 rounded p-1" type="text" />
        <input value={dateVal} onChange={(e) => dispatch(setDateVal(e.target.value))} className="border-0 rounded p-1" type="date" />
        <button onClick={() => dispatch(addTodoList({
          toDo: toDoVal,
          date: dateVal
        }))}>
          Add to do list
        </button>
      </div>
      <ul className="d-flex flex-column gap-3 list-unstyled m-0">
        {renderTodoList}
      </ul>
    </section>
  )
}

export default ToDoList;