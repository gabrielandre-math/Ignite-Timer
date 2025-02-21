import { useEffect, useState } from "react";
import { CountdownContainer } from "./styles"
import { differenceInSeconds } from "date-fns";

interface CountdownProps {
  activeCycle: any;
  setCycles: any;
}

export function Countdown({ activeCycle, setCycles }: CountdownProps) {

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  useEffect(() => {
    if (!activeCycle) return;

    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startDate
      );

      if (secondsDifference >= totalSeconds) {
        setCycles((state) =>
          state.map((cycle) =>
            cycle.id === activeCycleId
              ? { ...cycle, finishedDate: new Date() }
              : cycle
          )
        );
        setAmountSecondsPassed(totalSeconds);
        clearInterval(interval);
      } else {
        setAmountSecondsPassed(secondsDifference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId, setCycles]);
  return (

    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}