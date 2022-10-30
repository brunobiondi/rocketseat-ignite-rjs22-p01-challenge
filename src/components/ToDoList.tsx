import styled from 'styled-components'
import { Header } from './Header'
import { NewTaskForm } from './NewTaskForm'
import { Progress } from './Progress'
import { TasksList } from './TasksList'

const Container = styled.main`
  margin: 0 auto;
  max-width: 46rem;
`

export const ToDoList = () => {
  return (
    <>
      <Header />
      <Container>
        <NewTaskForm />
        <TasksList />
        <Progress />
      </Container>
    </>
  )
}
