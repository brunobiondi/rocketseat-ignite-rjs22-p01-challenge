import { useTasksStore } from '@/store/TasksStore'
import { ListEmpty } from './ListEmpty'
import { ListTasks } from './ListTasks'

export const Tasks = () => {
  const { tasks } = useTasksStore()
  return <>{tasks ? <ListTasks /> : <ListEmpty />}</>
}
