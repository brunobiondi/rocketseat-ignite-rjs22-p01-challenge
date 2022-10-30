import { useTasksStore } from '@/store/TasksStore'
import styled from 'styled-components'
import { TaskItem } from './TaskItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 4rem;
`

export const ListTasks = () => {
  const { todoKeys, doneKeys } = useTasksStore()

  return (
    <Container>
      {todoKeys.map((key) => (
        <TaskItem key={key} taskKey={key} />
      ))}

      {doneKeys.map((key) => (
        <TaskItem key={key} taskKey={key} />
      ))}
    </Container>
  )
}
