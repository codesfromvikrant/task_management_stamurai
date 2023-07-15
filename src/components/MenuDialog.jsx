import React, { useState, useRef, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { openEditTaskBar, deleteTask } from "../features/tasks/tasksSlice";

const MenuDialog = ({ status, taskData }) => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);
  const menuDialog = useRef(null);
  const dispatch = useDispatch();

  const showMenu = () => {
    setMenu(!menu);
  };

  const taskDeletion = () => {
    console.log(taskData);
    dispatch(deleteTask({ status: status, id: taskData.id }));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuDialog.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        onClick={showMenu}
        ref={menuDialog}
        className="bg-gray-200 shadow-md cursor-pointer py-1 absolute right-2 rounded w-max"
      >
        <CiMenuKebab />
      </div>
      {menu && (
        <div
          ref={menuRef}
          className="bg-gray-200 rounded shadow-xl w-max absolute right-2 top-10 z-[99]"
        >
          <ul className="text-xs font-medium">
            <li
              onClick={() =>
                dispatch(openEditTaskBar({ task: taskData, status }))
              }
              className="p-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              Edit Task
            </li>
            <li className="p-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
              Change Task's Status
            </li>
            <li
              onClick={() => taskDeletion()}
              className="p-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              Delete Task
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDialog;
