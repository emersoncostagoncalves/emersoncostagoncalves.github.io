import { Container, ButtonGroup, Button, Search } from "./style";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useTheme } from "@/stores/theme";
import { useTask } from "@/stores/tasks";

export default function Filter() {
  const { theme } = useTheme();
  const {
    filterDone,
    setFilterDone,
    filterPendent,
    setFilterPendent,
    searchText,
    setSearchText,
  } = useTask();

  function handleInput(e) {
    setSearchText(e.target.value);
  }

  function handlerDelete() {
    setSearchText("");
  }

  function handlerButtonDone() {
    if (filterPendent) {
      setFilterPendent();
      setFilterDone();
    } else {
      setFilterDone();
    }
  }

  function handlerButtonPendent() {
    if (filterDone) {
      setFilterPendent();
      setFilterDone();
    } else {
      setFilterPendent(true);
    }
  }

  return (
    <Container gap={1}>
      <ButtonGroup gap={0.5}>
        <Button
          active={filterDone}
          theme={theme}
          onClick={() => handlerButtonDone()}
        >
          Concluídas
        </Button>
        <Button
          active={filterPendent}
          theme={theme}
          onClick={() => handlerButtonPendent()}
        >
          Pendentes
        </Button>
      </ButtonGroup>
      <Search theme={theme}>
        <input
          onChange={(e) => handleInput(e)}
          value={searchText}
          placeholder="Buscar tarefa..."
        />
        {searchText.length > 0 ? (
          <GrClose onClick={() => handlerDelete()} size={15} cursor="pointer" />
        ) : (
          <FiSearch />
        )}
      </Search>
    </Container>
  );
}
