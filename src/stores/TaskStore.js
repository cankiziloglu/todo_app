import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialTasks } from '../lib/constants';

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: initialTasks,
      addTask: (newTaskText) => {
        const newTask = {
          id: new Date().getTime(),
          name: newTaskText,
          completed: false,
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
      removeTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        }));
      },
      toggleTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          }),
        }));
      },
      markAllAsComplete: () => {
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        }));
      },
      markAllAsIncomplete: () => {
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, completed: false })),
        }));
      },
      reset: () => {
        set({ tasks: initialTasks });
      },
      removeAll: () => {
        set({ tasks: [] });
      },
    }),
    { name: 'tasks' }
  )
);
