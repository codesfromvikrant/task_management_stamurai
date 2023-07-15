import React, { useState, useEffect, useRef } from "react";
import { TiArrowBack } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { closeEditTaskBar, saveEditedTask } from "../features/tasks/tasksSlice";

const EditTask = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const editorRef = useRef(null);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(tasks.taskToEdit.title);
    setDescription(tasks.taskToEdit.description);
    function handleClickOutside(event) {
      if (editorRef.current && !editorRef.current.contains(event.target)) {
        setOpenEditor(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const saveChanges = () => {
    let newTask = {
      ...tasks.taskToEdit,
      title,
      description,
    };
    dispatch(saveEditedTask({ task: newTask }));
  };

  console.log(tasks.todo);
  return (
    <div
      style={{
        backdropFilter: "blur(3px)",
        backgroundOpacity: "0.5",
      }}
      className="w-[100vw] h-[100vh] z-[99] fixed top-0 left-0 flex justify-center items-center"
    >
      <div
        ref={editorRef}
        className="w-[40rem] bg-gray-100 rounded shadow p-4 flex justify-start items-start flex-col"
      >
        <div className="flex justify-between items-center gap-3 mb-4">
          <h3 className="text-xl font-bold text-gray-700 w-max">Edit Task</h3>
          <button
            onClick={() => saveChanges()}
            className="text-white text-xs font-semibold py-2 px-4 rounded-full bg-blue-500"
          >
            Save Changes
          </button>
          <div
            onClick={() => dispatch(closeEditTaskBar())}
            className="flex justify-start items-center gap-2 cursor-pointer bg-gray-300 rounded-full w-max py-2 px-4"
          >
            <TiArrowBack />
            <p className="text-xs font-bold">Cancel & Back</p>
          </div>
        </div>
        <p className="font-extrabold text-gray-700">Title*</p>
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="w-full h-20 text-sm font-medium outline-blue-200 p-2 bg-white rounded"
          placeholder="Enter the Title"
        ></textarea>
        <p className="font-extrabold text-gray-700 mt-3">Description*</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full h-64 p-2 bg-white text-sm text-gray-600 outline-blue-200  rounded"
          placeholder="Enter Description"
        ></textarea>
      </div>
    </div>
  );
};

export default EditTask;
