import { Container, Box, Task, EditButton, DeleteButton } from "./style";
import { useTask } from "@/stores/tasks";
import { useTheme } from "@/stores/theme";
import { Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import React from "react";
import { useToast } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function TasksContainer() {
  const {
    tasks,
    setDeleteTask,
    update,
    setUpdate,
    filterDone,
    filterPendent,
    searchText,
    setSearchText,
    setFilterDone,
    setFilterPendent,
  } = useTask();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [task, setTask] = useState("");
  const [text, setText] = useState("");

  const alertRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();

  function handleCheckBox(e, task) {
    e.target.checked ? (task.done = true) : (task.done = false);
    setUpdate((prev) => !prev);
  }

  useEffect(() => {}, [update]);

  function editTask(task) {
    if (text.trim().length > 0) {
      tasks.forEach((el) => {
        if (el.id === task.id) {
          el.text = text;
          setUpdate((prev) => !prev);
          setEditIsOpen(false);
        }
      });
    } else {
      toast({
        title: "Error ao salvar",
        description: "Você precisa inserir um texto antes de salvar!",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setText("");
    }
  }

  function openEdit(task) {
    setTask(task);
    setText(task.text);
    setEditIsOpen(true);
  }

  function closeEdit() {
    setEditIsOpen(false);
  }

  function handleInput(e) {
    setText(e.target.value);
  }

  function deleteTask(task) {
    const newList = tasks.filter((el) => el.id != task.id);
    setDeleteTask(newList);
    onClose();
  }

  function onOpen(task) {
    setTask(task);
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function cleanAllFilter() {
    setSearchText("");
  }

  function cleanDoneFilter() {
    setSearchText("");
    setFilterDone();
  }

  function cleanPendentFilter() {
    setSearchText("");
    setFilterPendent();
  }

  const allTasks = tasks
    .filter((el) => el.text.toLowerCase().includes(searchText.toLowerCase()))
    .map((el, i) => (
      <Task key={el.id} theme={theme} p={1} gap={0.5} done={el.done}>
        <Box gap={0.5}>
          <Checkbox
            onChange={(e) => handleCheckBox(e, el)}
            colorScheme="green"
            isChecked={el.done}
          ></Checkbox>
          <p>{el.text}</p>
        </Box>
        <Box gap={0.5} theme={theme}>
          <Tooltip hasArrow label="Editar" bg={theme.primary}>
            <EditButton>
              <BiEditAlt onClick={() => openEdit(el)} cursor="pointer" />
            </EditButton>
          </Tooltip>
          <Tooltip hasArrow label="Excluir" bg={theme.primary}>
            <DeleteButton>
              <FiTrash2 onClick={() => onOpen(el)} cursor="pointer" />
            </DeleteButton>
          </Tooltip>
        </Box>
      </Task>
    ));

  const tasksDone = tasks
    .filter(
      (el) =>
        el.done && el.text.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((el, i) => (
      <Task key={el.id} theme={theme} p={1} gap={0.5} done={el.done}>
        <Box gap={0.5}>
          <Checkbox
            onChange={(e) => handleCheckBox(e, el)}
            colorScheme="green"
            isChecked={el.done}
          ></Checkbox>
          <p>{el.text}</p>
        </Box>
        <Box gap={0.5} theme={theme}>
          <BiEditAlt onClick={() => openEdit(el)} cursor="pointer" />
          <FiTrash2 onClick={() => onOpen(el)} cursor="pointer" />
        </Box>
      </Task>
    ));

  const tasksPendent = tasks
    .filter(
      (el) =>
        !el.done && el.text.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((el, i) => (
      <Task key={el.id} theme={theme} p={1} gap={0.5} done={el.done}>
        <Box gap={0.5}>
          <Checkbox
            onChange={(e) => handleCheckBox(e, el)}
            colorScheme="green"
            isChecked={el.done}
          ></Checkbox>
          <p>{el.text}</p>
        </Box>
        <Box gap={0.5} theme={theme}>
          <BiEditAlt onClick={() => openEdit(el)} cursor="pointer" />
          <FiTrash2 onClick={() => onOpen(el)} cursor="pointer" />
        </Box>
      </Task>
    ));

  return (
    <Container gap={1} theme={theme}>
      {!filterDone && !filterPendent && allTasks}
      {filterDone && tasksDone.length > 0 && tasksDone}
      {!filterDone &&
        !filterPendent &&
        searchText.length > 0 &&
        allTasks.length === 0 && (
          <p>
            Nenhuma tarefa encontrada{" "}
            <span onClick={() => cleanAllFilter()}>clique aqui</span> para
            limpar todos os filtros.
          </p>
        )}
      {filterDone && tasksDone.length === 0 && (
        <p>
          Nenhuma tarefa encontrada{" "}
          <span onClick={() => cleanDoneFilter()}>clique aqui</span> para limpar
          todos os filtros.
        </p>
      )}
      {filterPendent && tasksPendent.length > 0 && tasksPendent}
      {filterPendent && tasksPendent.length === 0 && (
        <p>
          Nenhuma tarefa encontrada{" "}
          <span onClick={() => cleanPendentFilter()}>clique aqui</span> para
          limpar todos os filtros.
        </p>
      )}
      <AlertDialog
        name="Alert"
        motionPreset="slideInBottom"
        leastDestructiveRef={alertRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Deletar Tarefa</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Você tem certeza que deseja excluir a tarefa? Essa opção não poderá
            ser desfeita.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Não</Button>
            <Button
              ref={alertRef}
              colorScheme="red"
              ml={3}
              onClick={() => deleteTask(task)}
            >
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={editIsOpen}
        onClose={closeEdit}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Edite o texto da sua tarefa abaixo.</FormLabel>
              <Input
                value={text}
                ref={initialRef}
                placeholder="Insira um texto para tarefa..."
                onChange={(e) => handleInput(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => editTask(task)} colorScheme="green" mr={3}>
              Salvar
            </Button>
            <Button onClick={closeEdit}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
