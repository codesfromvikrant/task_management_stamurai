import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { TiArrowBack } from "react-icons/ti";
import { closeAddTaskBar } from "../features/tasks/tasksSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-100 overflow-y-auto shadow-2xl fixed top-0 right-0 h-[100vh] p-4 rounded">
      <div
        onClick={() => dispatch(closeAddTaskBar())}
        className="flex justify-start items-center gap-2 cursor-pointer bg-gray-300 rounded-full w-max py-2 px-4"
      >
        <TiArrowBack />
        <p className="text-xs font-bold">Back</p>
      </div>
      <div className="flex justify-between items-center gap-2 my-3">
        <h3 className="w-max font-bold text-gray-800">
          Add In <span className="text-blue-500">{tasks.taskStatus}</span> Task
          List
        </h3>
        <button
          onClick={() => {
            dispatch(
              addTask({
                status: tasks.taskStatus,
                task: { id: nanoid(), title, description },
              })
            );
            console.log("working");
            setTitle("");
            setDescription("");
          }}
          className="text-xs text-white w-max bg-blue-500 py-2 px-4 rounded-full font-semibold"
        >
          Add
        </button>
      </div>
      <textarea
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        type="text"
        placeholder="Enter the Title..."
        className="w-full p-2 text-sm h-28 outline-none placeholder:font-medium bg-white rounded mb-2"
      >
        {" "}
      </textarea>
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        placeholder="Enter Descriptions..."
        className="w-full outline-none placeholder:font-medium p-2 h-full text-sm bg-white rounded mb-2"
      ></textarea>
    </div>
  );
};

export default AddTask;
