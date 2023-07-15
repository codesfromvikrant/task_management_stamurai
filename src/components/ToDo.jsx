import React, { useState } from "react";
import AddTask from "./AddTask";
import FilterBtn from "./FilterBtn";
import SearchTask from "./SearchTask";
import TaskBlock from "./TaskBlock";
import MenuDialog from "./MenuDialog";
import { useSelector, useDispatch } from "react-redux";
import { openAddTaskBar } from "../features/tasks/tasksSlice";

const ToDo = ({ editTask }) => {
  const [addTask, setAddTask] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // const deleteTask = (id) => {
  //   let newTask = tasks.todo.filter((task) => task.id !== id);
  //   setTasks({ ...tasks, todo: newTask });
  // };

  const taskList = tasks.todo.map((task) => {
    return <TaskBlock key={task.id} task={task} status="todo" />;
  });

  return (
    <div className="bg-gray-100 p-2 rounded">
      <div className="flex justify-between items-center my-2">
        <h3 className="font-extrabold text-lg text-gray-700">To Do Tasks</h3>
        <FilterBtn />
      </div>
      <SearchTask />
      <button
        onClick={() => {
          dispatch(openAddTaskBar({ status: "todo" }));
        }}
        className="bg-white hover:bg-blue-500 w-full py-2 my-2 shadow rounded text-gray-700 hover:text-white transition-all duration-700 font-medium text-sm"
      >
        Add Task
      </button>
      <div className="">{taskList}</div>
    </div>
  );
};

export default ToDo;
