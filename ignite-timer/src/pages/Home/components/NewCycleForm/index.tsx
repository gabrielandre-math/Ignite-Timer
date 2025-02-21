import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"
import * as zod from 'zod'
export const NewCycleForm = () => {
  const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod
      .number()
      .min(5, "O ciclo precisa ser de no minimo 5 minutos.")
      .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
  });

  type NewCycleFormData = zod.infer<typeof newCycleValidationSchema>; //Isso é mt maneiro!! (Inferiu o tipo a partir de newCycleValidationSchema :0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>

  )
}