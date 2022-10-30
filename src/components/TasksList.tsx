import { useTasksStore } from '@/store/TasksStore'

export const TasksList = () => {
  const tasks = useTasksStore()

  return (
    <>
      {/* {tasks.tasks.map((task) => (
        <p key={task.id}>{task.task}</p>
      ))} */}
    </>
  )
}
