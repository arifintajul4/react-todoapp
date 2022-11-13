import Input from "./components/Input";
import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <main className="relative">
      <div className="bg-desk-dark h-[20rem] w-full bg-cover bg-no-repeat" />
      <div className="w-full min-h-screen bg-[#181824]" />

      <div className="absolute w-[30rem] mt-10  top-0 bottom-0 left-0 right-0 mx-auto my-auto">
        <div className="flex justify-between items-center text-white my-10">
          <h1 className="font-bold text-4xl">TODO</h1>
          <button>
            <span className="fa-solid fa-user"></span>
          </button>
        </div>
        <Input
          placeholder="Create a new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            //detect enter key
            if (e.key === "Enter" && todo !== "") {
              setTodoList([
                ...todoList,
                {
                  name: todo,
                  isDone: false,
                },
              ]);
              setTodo("");
            }
          }}
        />

        <TodoList todoList={todoList} setTodoList={setTodoList} />

        <p className="mt-10 text-center text-grayish-blue-dark  ">
          Drag and Drop to reorder list
        </p>
      </div>
    </main>
  );
}

export default App;
