import React from "react";
import { Container, Box, Bar } from "./style";
import { useTheme } from "@/stores/theme";
import { useTask } from "@/stores/tasks";
import { useEffect, useState, useLayoutEffect } from "react";
import Confetti from "react-confetti";

export default function ProgressBar() {
  const { theme } = useTheme();
  const { tasks, update, tasksDone, setTasksDone } = useTask();
  const [tasksCount, setTasksCount] = useState(0);
  const [valueBar, setValueBar] = useState(0);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [runConfete, setRunConfete] = useState(false);
  const [confete, setConfete] = useState(false);

  function handlerProgressBar() {
    const tasksCount = tasks.length;
    const tasksDone = tasks.filter((el) => el.done).length * 100;
    setValueBar(tasksDone / tasksCount);
    setTasksCount(tasks.length);
    setTasksDone(tasks.filter((el) => el.done).length);
  }

  useEffect(() => {
    handlerProgressBar();

    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);
  }, [tasks, update, valueBar]);

  useLayoutEffect(() => {
    if (valueBar === 100) {
      setRunConfete(true);
      setConfete(true);
      setTimeout(() => {
        setConfete(false);
      }, 1000);
    } else {
      setConfete(false);
    }
  }, [update, tasks, valueBar]);

  return (
    <>
      <Confetti
        width={screenSize.width}
        height={screenSize.height}
        run={runConfete}
        recycle={confete}
        confettiSource={{
          w: 50,
          h: 10,
          x: screenSize.width / 2,
          y:
            screenSize.width > 767
              ? screenSize.height / 3.4
              : screenSize.height / 6,
        }}
      />
      <Container gap={0.2}>
        <Box justify="space-between" align="flex-end" theme={theme} bg="none">
          <h2>Progresso</h2>
          <p>
            {tasksDone}/{tasksCount}
          </p>
        </Box>
        <Box theme={theme}>
          <Bar width={valueBar} height={30} />
        </Box>
      </Container>
    </>
  );
}
