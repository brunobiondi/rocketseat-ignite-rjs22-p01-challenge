import svgMore from '@/assets/more.svg'
import { useTasksStore } from '@/store/TasksStore'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  gap: 0.5rem;
  margin: -1.5rem auto 4rem;
  max-width: 46rem;
`

const Input = styled.input`
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  flex: 1;
  padding: 1rem;
`

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  padding: 0 1rem;
  transition: all 0.5s;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:disabled {
    background-color: ${(props) => props.theme['gray-500']};
    cursor: not-allowed;
  }

  &:not(:disabled) {
    background-color: ${(props) => props.theme['blue-dark']};
  }

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.blue};
  }
`

export const NewTaskForm = () => {
  const tasks = useTasksStore()
  const [newTask, setNewTask] = useState('')
  const inputTaskRef = useRef<HTMLInputElement>(null)

  const isDisabledSubmit = newTask.trim().length === 0

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleSubmitAddTask = (event: FormEvent<HTMLFormElement>) => {
    if (isDisabledSubmit) return

    event.preventDefault()
    tasks.add(newTask)
    setNewTask('')
    inputTaskRef.current?.focus()
  }

  return (
    <Container onSubmit={handleSubmitAddTask}>
      <Input
        ref={inputTaskRef}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTask}
        value={newTask}
      />

      <Button type="submit" disabled={isDisabledSubmit}>
        Criar
        <img src={svgMore} alt="" />
      </Button>
    </Container>
  )
}
