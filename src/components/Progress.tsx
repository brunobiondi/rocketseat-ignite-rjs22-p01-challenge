import { useTasksStore } from '@/store/TasksStore'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

const TitleCounter = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.blue};
  font-size: 0.875rem;
  font-weight: bold;
`

const TitleResume = styled(TitleCounter)`
  color: ${(props) => props.theme.purple};
`

const ResultTasks = styled.span`
  background: ${(props) => props.theme['gray-400']};
  border-radius: 1rem;
  color: ${(props) => props.theme['gray-100']};
  display: inline-block;
  font-size: 0.75rem;
  margin-left: 0.5rem;
  padding: 0.125rem 0.5rem;
`

export const Progress = () => {
  const { tasks, doneKeys } = useTasksStore()
  const totalTasks = Object.keys(tasks).length
  const totalDoneTasks = doneKeys.length

  return (
    <Container>
      <TitleCounter>
        Tarefas criadas <ResultTasks>{totalTasks}</ResultTasks>
      </TitleCounter>
      <TitleResume>
        Concluídas
        <ResultTasks>
          {totalDoneTasks ? `${totalDoneTasks} de ${totalTasks}` : 0}
        </ResultTasks>
      </TitleResume>
    </Container>
  )
}
