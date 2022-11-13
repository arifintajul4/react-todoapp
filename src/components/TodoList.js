import React, { useEffect } from "react";
import Checkbox from "./Checkbox";

const TodoList = ({ todoList, setTodoList }) => {
  const [filteredTodo, setFilteredTodo] = React.useState(todoList);
  const [activeFilter, setActiveFilter] = React.useState("all");

  const handleTodoChange = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isDone = !newTodoList[index].isDone;
    setTodoList(newTodoList);
  };

  const handleClearCompleted = () => {
    const newTodoList = todoList.filter((todo) => !todo.isDone);
    setTodoList(newTodoList);
  };

  const handleActiveFilter = (filter) => {
    switch (filter) {
      case "all":
        return todoList;
      case "active":
        return todoList.filter((todo) => !todo.isDone);
      case "completed":
        return todoList.filter((todo) => todo.isDone);
      default:
        return todoList;
    }
  };

  useEffect(() => {
    setFilteredTodo(handleActiveFilter(activeFilter));
  }, [activeFilter, todoList]);

  return (
    <div className="w-full rounded bg-[#25273c] text-grayish-blue-dark text-grayish-blue-darkmy-6 my-6">
      <ul className="pb-1">
        {filteredTodo?.map((el, idx) => {
          return (
            <li
              key={idx}
              style={{ marginTop: 0 }}
              className={`flex gap-4 px-4 border-grayish-blue-dark border-b py-3`}
            >
              <Checkbox
                checked={el?.isDone}
                onClick={() => handleTodoChange(idx)}
              />
              {el?.name}
            </li>
          );
        })}
        {filteredTodo?.length === 0 && (
          <li className="text-center py-3 border-grayish-blue-dark border-b">
            No Todo!
          </li>
        )}
      </ul>
      <div className="px-4 mt-4 pb-4 flex justify-between items-center">
        <p>{filteredTodo?.filter((el) => !el?.isDone).length} items left</p>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setActiveFilter("all")}
            className={`${activeFilter === "all" ? "text-blue" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("active")}
            className={`${activeFilter === "active" ? "text-blue" : ""}`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveFilter("completed")}
            className={`${activeFilter === "completed" ? "text-blue" : ""}`}
          >
            Completed
          </button>
        </div>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
