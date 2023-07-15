import React, { useState } from "react";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";
import FilterBtn from "./FilterBtn";
import TaskBlock from "./TaskBlock";
import { useSelector, useDispatch } from "react-redux";
import { openAddTaskBar } from "../features/tasks/tasksSlice";

const InProgress = () => {
  const [addTask, setAddTask] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const taskList = tasks.inProgress.map((task) => {
    return <TaskBlock key={task.id} task={task} />;
  });

  return (
    <div className="bg-gray-100 p-2 rounded">
      <div className="flex justify-between items-center my-2">
        <h3 className="font-extrabold text-lg text-gray-700">
          In-Progress Tasks
        </h3>
        <FilterBtn />
      </div>
      <SearchTask />
      <button
        onClick={() => {
          dispatch(openAddTaskBar({ status: "inProgress" }));
        }}
        className="bg-white hover:bg-blue-500 w-full py-2 my-2 shadow rounded text-gray-700 hover:text-white transition-all duration-700 font-medium text-sm"
      >
        Add Task
      </button>
      <div className="">{taskList}</div>
    </div>
  );
};

export default InProgress;
