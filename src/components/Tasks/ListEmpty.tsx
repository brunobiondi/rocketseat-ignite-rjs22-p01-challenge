import imgWithoutTasks from '@/assets/without-tasks.png'
import styled from 'styled-components'

const Container = styled.div`
  padding: 4rem 5rem;
  margin-top: 1px solid ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-300']};
  text-align: center;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 0.5rem;
`

export const ListEmpty = () => {
  return (
    <Container>
      <img src={imgWithoutTasks} alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}
