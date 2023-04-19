import { Container, Box, InputTask, AddButton } from "./style";
import { GrFormAdd } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { useTheme } from "@/stores/theme";
import { useState, useLayoutEffect } from "react";
import { useTask } from "@/stores/tasks";
import { useToast, Tooltip } from "@chakra-ui/react";

export default function AddTask() {
  const { theme } = useTheme();
  const [taskText, setTaskText] = useState("");
  const { tasks, setTasks } = useTask();
  const toast = useToast();
  const [idTask, setIdTask] = useState(1);

  function handlerInput(e) {
    setTaskText(e.target.value);
  }

  function handlerTask() {
    if (taskText.trim().length > 0) {
      setTasks({
        id: idTask,
        text: taskText.trim(),
        visible: true,
        done: false,
      });
      setTaskText("");
      setIdTask((prev) => prev + 1);
      toast({
        title: "Nova tarefa criada",
        description: "Sua tarefa foi criada com sucesso!",
        status: "success",
        duration: 4000,
        isClosable: true,
        colorScheme: "messenger",
      });
    } else {
      setTaskText("");
      toast({
        title: "Erro ao criar tarefa",
        description: "Sua tarefa precisa conter algum texto!",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  }

  useLayoutEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <Container>
      <Box theme={theme} p={0.5} gap={0.5}>
        <FaTasks color="#7eee5c" size={20} />
        <InputTask
          onChange={(e) => handlerInput(e)}
          value={taskText}
          placeholder="Adicionar nova tarefa"
          theme={theme}
        />
        <Tooltip hasArrow label="Add Tarefa" bg={theme.destaque}>
          <AddButton>
            <GrFormAdd
              onClick={() => handlerTask()}
              size={30}
              cursor="pointer"
            />
          </AddButton>
        </Tooltip>
      </Box>
    </Container>
  );
}
