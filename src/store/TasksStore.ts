import dayjs from 'dayjs'
import create from 'zustand'

interface TaskState {
  task: string
  completedAt: string | null
}

interface TasksState {
  [key: string]: TaskState
}

interface TasksStoreState {
  tasks: TasksState
  todoKeys: string[]
  doneKeys: string[]
  add: (task: string) => void
  remove: (key: string) => void
  check: (key: string) => void
  uncheck: (key: string) => void
}

const now = () => dayjs().format('YYYY-MM-DD HH:mm:ss')
const getTaskKey = () => `task_${dayjs().format('YYYYMMDDHHmmss')}`

export const useTasksStore = create<TasksStoreState>((set) => ({
  tasks: {},
  todoKeys: [],
  doneKeys: [],

  add: (task) =>
    set((state) => {
      const key = getTaskKey()
      return {
        tasks: { ...state.tasks, [key]: { task, completedAt: null } },
        todoKeys: [key, ...state.todoKeys],
      }
    }),

  remove: (key) =>
    set((state) => {
      const tasks = { ...state.tasks }
      delete tasks[key]
      return {
        tasks,
        todoKeys: state.todoKeys.filter((todoKey) => todoKey !== key),
        doneKeys: state.doneKeys.filter((doneKey) => doneKey !== key),
      }
    }),

  check: (key) =>
    set((state) => {
      const tasks = { ...state.tasks }
      tasks[key].completedAt = now()
      return {
        tasks,
        todoKeys: state.todoKeys.filter((todoKey) => todoKey !== key),
        doneKeys: [key, ...state.doneKeys],
      }
    }),

  uncheck: (key) =>
    set((state) => {
      const tasks = { ...state.tasks }
      tasks[key].completedAt = null
      return {
        tasks,
        todoKeys: [key, ...state.todoKeys].sort(),
        doneKeys: state.doneKeys.filter((doneKey) => doneKey !== key),
      }
    }),
}))
