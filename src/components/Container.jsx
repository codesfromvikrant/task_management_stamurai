import React, { useState } from "react";
import Completed from "./Completed";
import InProgress from "./InProgress";
import ToDo from "./ToDo";
import EditTask from "./EditTask";
import AddTask from "./AddTask";
import { useSelector } from "react-redux";
import { openAddTaskBar } from "../features/tasks/tasksSlice";

const Container = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="max-w-5xl mx-auto my-8 bg-gray-50 rounded-md relative p-3 grid grid-cols-3 gap-4">
      <ToDo />
      <InProgress />
      {/* <Completed /> */}
      {tasks.editTaskBar && <EditTask />}
      {tasks.addTaskBar && <AddTask status="todo" />}
    </div>
  );
};

export default Container;
