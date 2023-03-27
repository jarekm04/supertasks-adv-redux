import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type TaskState = {
  entities: Task[];
};

type DraftTask = Pick<Task, 'title'>;

const createTask = (draftTask: DraftTask): Task => {
  return {
    id: nanoid(),
    ...draftTask,
  };
};

const initialState: TaskState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state) => state,
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
