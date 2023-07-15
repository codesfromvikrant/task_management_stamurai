import React from "react";
import MenuDialog from "./MenuDialog";

const TaskBlock = ({ task, status }) => {
  return (
    <div className="bg-white h-28 my-2 rounded shadow p-2 relative">
      <MenuDialog status={status} taskData={task} />
      <h3
        onClick={() => {
          editTask("todo", task.id);
        }}
        className="cursor-pointer font-semibold text-sm text-gray-900 hover:text-blue-600 transition-all duration-300"
      >
        {task.title}
      </h3>
      <p
        onClick={() => {
          editTask("todo", task.id);
        }}
        className="text-sm text-gray-600 cursor-pointer"
      >
        {task.description}
      </p>
    </div>
  );
};

export default TaskBlock;
