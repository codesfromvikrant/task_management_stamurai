import React, { useState } from "react";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";
import FilterBtn from "./FilterBtn";

const Completed = ({ tasks, setTasks }) => {
  const [addTask, setAddTask] = useState(false);
  const taskList = tasks.completed.map((task) => {
    return (
      <div className="bg-white my-2 rounded shadow p-2">
        <h3 className=" font-semibold text-gray-900">{task.title}</h3>
        <p className="text-sm text-gray-700">{task.description}</p>
      </div>
    );
  });
  return (
    <div className="bg-gray-100 p-2 rounded">
      <div className="flex justify-between items-center my-2">
        <h3 className="font-extrabold text-lg text-gray-700">
          Completed Tasks
        </h3>
        <FilterBtn />
      </div>
      <SearchTask />
      <button
        onClick={() => setAddTask(true)}
        className="bg-white hover:bg-blue-500 w-full py-2 my-2 shadow rounded text-gray-700 hover:text-white transition-all duration-700 font-medium text-sm"
      >
        Add Task
      </button>
      {addTask && (
        <AddTask status="completed" tasks={tasks} setTasks={setTasks} />
      )}
      <div className="">{taskList}</div>
    </div>
  );
};

export default Completed;
