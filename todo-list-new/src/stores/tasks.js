import { create } from "zustand";

export const useTask = create((set) => ({
  tasks: [],
  setTasks: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  setDeleteTask: (newList) => set((state) => ({ tasks: newList })),
  tasksDone: 0,
  setTasksDone: (done) => set((state) => ({ tasksDone: done })),
  update: false,
  setUpdate: (e) => set((state) => ({ update: e })),
  filterDone: false,
  setFilterDone: () => set((state) => ({ filterDone: !state.filterDone })),
  filterPendent: false,
  setFilterPendent: () =>
    set((state) => ({ filterPendent: !state.filterPendent })),
  searchText: "",
  setSearchText: (text) => set((state) => ({ searchText: text })),
}));
