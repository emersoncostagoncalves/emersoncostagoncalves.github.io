import React from "react";
import { Container, Box, Bar } from "./style";
import { useTheme } from "@/stores/theme";
import { useTask } from "@/stores/tasks";
import { useEffect, useState, useLayoutEffect } from "react";

export default function ProgressBar() {
  const { theme } = useTheme();
  const { tasks, update, tasksDone, setTasksDone } = useTask();
  const [tasksCount, setTasksCount] = useState(0);
  const [valueBar, setValueBar] = useState(0);

  function handlerProgressBar() {
    const tasksCount = tasks.length;
    const tasksDone = tasks.filter((el) => el.done).length * 100;
    setValueBar(tasksDone / tasksCount);
    setTasksCount(tasks.length);
    setTasksDone(tasks.filter((el) => el.done).length);
  }

  useEffect(() => {
    handlerProgressBar();
  }, [tasks, update]);

  useLayoutEffect(() => {}, [update, tasks, valueBar]);

  return (
    <>
      <Container gap={1}>
        <Box justify="space-between" align="flex-end" theme={theme} bg="none">
          <h1>Progresso</h1>
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
