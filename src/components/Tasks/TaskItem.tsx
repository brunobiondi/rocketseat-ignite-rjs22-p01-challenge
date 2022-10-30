import { useTasksStore } from '@/store/TasksStore'
import { MouseEvent } from 'react'
import styled from 'styled-components'

import svgCheck from '@/assets/check.svg'
import svgChecked from '@/assets/checked.svg'
import svgTrash from '@/assets/trash.svg'

const Container = styled.div`
  background: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 0.5rem;
  gap: 0.75rem;
  display: flex;
  padding: 1rem;
`

type TaskProps = {
  isDone: boolean
}

const Task = styled.div<TaskProps>`
  color: ${(props) =>
    props.isDone ? props.theme['gray-300'] : props.theme['gray-100']};
  font-size: 0.875rem;
  flex: 1;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`

export const TaskItem = ({ taskKey }: { taskKey: string }) => {
  const { tasks, check, uncheck, remove } = useTasksStore()
  const task = tasks[taskKey]

  const isDone = !!task.completedAt

  const handleCheck = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    check(taskKey)
  }

  const handleUncheck = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    uncheck(taskKey)
  }

  const handleRemove = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    remove(taskKey)
  }

  return (
    <Container>
      {isDone ? (
        <a href="#" onClick={handleUncheck}>
          <img src={svgChecked} alt="Desmarcar tarefa como concluída" />
        </a>
      ) : (
        <a href="#" onClick={handleCheck}>
          <img src={svgCheck} alt="Marcar tarefa como concluída" />
        </a>
      )}

      <Task isDone={isDone}>{task.task}</Task>

      <a href="#" onClick={handleRemove}>
        <img src={svgTrash} alt="Excluir tarefa" />
      </a>
    </Container>
  )
}
