import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  inProgress: [],
  completed: [],
  taskStatus: "",
  addTaskBar: false,
  editTaskBar: false,
  taskToEdit: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.status === "todo") {
        state.todo.unshift(action.payload.task);
      } else if (action.payload.status === "inProgress") {
        state.inProgress.unshift(action.payload.task);
      } else if (action.payload.status === "completed") {
        state.completed.unshift(action.payload.task);
      }
    },
    openAddTaskBar: (state, action) => {
      state.taskStatus = action.payload.status;
      state.addTaskBar = true;
    },
    closeAddTaskBar: (state) => {
      state.addTaskBar = false;
    },
    openEditTaskBar: (state, action) => {
      state.addTaskBar = false;
      state.taskToEdit = action.payload.task;
      state.taskStatus = action.payload.status;
      state.editTaskBar = true;
    },
    closeEditTaskBar: (state) => {
      state.editTaskBar = false;
    },
    saveEditedTask: (state, action) => {
      console.log(action.payload.task, state.taskStatus);
      if (state.taskStatus === "todo") {
        state.todo = state.todo.map((task) => {
          if (task.id === action.payload.task.id) {
            return action.payload.task;
          }
          return task;
        });
      } else if (state.taskStatus === "inProgress") {
        state.inProgress = state.inProgress.map((task) => {
          if (task.id === action.payload.task.id) {
            return action.payload.task;
          }
          return task;
        });
      } else if (state.taskStatus === "completed") {
        state.completed = state.completed.map((task) => {
          if (task.id === action.payload.task.id) {
            return action.payload.task;
          }
          return task;
        });
      }
    },

    deleteTask: (state, action) => {
      console.log(action.payload);
      if (action.payload.status === "todo") {
        state.todo = state.todo.filter(
          (task) => task.id !== action.payload.id
        );
      } else if (action.payload.status === "inProgress") {
        state.inProgress = state.inProgress.filter(
          (task) => task.id !== action.payload.id
        );
      } else if (action.payload.status === "completed") {
        state.completed = state.completed.filter(
          (task) => task.id !== action.payload.id
        );
      }
    },
  },
});

export const {
  addTask,
  openAddTaskBar,
  closeAddTaskBar,
  openEditTaskBar,
  closeEditTaskBar,
  saveEditedTask,
  deleteTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
