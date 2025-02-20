import { Play } from "phosphor-react"
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles"
import { useForm } from 'react-hook-form'
export const Home = () => {
  const { register, handleSubmit, watch } = useForm()
  function handleCreateNewCycle(data: any) {
    console.log(data);
  }
  const task = watch('task');
  const isSubmitDisabled = !task;
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto x" />
            <option value="Projeto y" />
            <option value="Projeto z" />
            <option value="Projeto w" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            {...register('minutesAmount')}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          Começar
          <Play size={24} />
        </StartCountdownButton>

      </form>
    </HomeContainer>
  )
}