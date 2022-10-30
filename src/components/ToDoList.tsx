import { Header } from './Header'
import { NewTaskForm } from './NewTaskForm'
import { Progress } from './Progress'
import { TasksList } from './TasksList'

export const ToDoList = () => {
  return (
    <>
      <Header />
      <NewTaskForm />
      <TasksList />
      <Progress />
    </>
  )
}
