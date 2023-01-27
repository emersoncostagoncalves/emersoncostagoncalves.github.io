import React, { useEffect } from "react";

import Task from "../task/Task";
import { Container, TaskInput, TasksContainer } from "./styles";
import { IoIosAddCircle } from "react-icons/io"

import useFunctions from "../../hooks/useFunctions"

interface TasksProps {
    bar: number
    setbar: any
    tasks: any
    setTasks: any
    filter: string
    setFilter: any
    pesquisa: string
    setPesquisa: any

}

export default function Tasks(props: TasksProps) {

    const { setNewTask, getTextInput, AddTask, editTask, deleteTask, taskDone, taskSave, taskCancel, getEditInputText } = useFunctions()


    useEffect(() => {
        setNewTask(false)

    })

    const tasksDone = props.tasks.filter((el: any) => el.state === "done").
        map((el: any) => <Task tasks={props.tasks} setTasks={props.setTasks} bar={props.bar}
            setbar={props.setbar} task={el} id={el.id} state={el.state} disabled={el.disabled} edit={editTask} delete={deleteTask}
            done={taskDone} key={el.id} text={el.text} save={taskSave} cancel={taskCancel} getText={getEditInputText} />)


    const tasksPendent = props.tasks.filter((el: any) => el.state === "pendent").
        map((el: any) => <Task tasks={props.tasks} setTasks={props.setTasks} bar={props.bar}
            setbar={props.setbar} task={el} id={el.id} state={el.state} disabled={el.disabled} edit={editTask} delete={deleteTask}
            done={taskDone} key={el.id} text={el.text} save={taskSave} cancel={taskCancel} getText={getEditInputText} />)

    const tasksAll = props.tasks.map((el: any) => <Task tasks={props.tasks} setTasks={props.setTasks} bar={props.bar}
        setbar={props.setbar} task={el} id={el.id} state={el.state} disabled={el.disabled} edit={editTask} delete={deleteTask}
        done={taskDone} key={el.id} text={el.text} save={taskSave} cancel={taskCancel} getText={getEditInputText} />)

    const taskSearch = props.tasks.filter((el: any) => el.text.toLowerCase().includes(props.pesquisa)).
        map((el: any) => <Task tasks={props.tasks} setTasks={props.setTasks} bar={props.bar}
            setbar={props.setbar} task={el} id={el.id} state={el.state} disabled={el.disabled} edit={editTask} delete={deleteTask}
            done={taskDone} key={el.id} text={el.text} save={taskSave} cancel={taskCancel} getText={getEditInputText} />)

    return (
        <>
            <Container>
                <TaskInput>
                    <input onInput={(e) => getTextInput(e)} type="text" placeholder="Adicionar nova tarefa..." />
                    <button onClick={() => AddTask(props.setbar, props.tasks, props.setTasks)} >
                        <IoIosAddCircle color="white" size="25px" />
                    </button>
                </TaskInput>
                < TasksContainer>

                    {props.pesquisa.length > 0 && taskSearch}
                    {props.pesquisa.length > 0 && props.tasks.length > 0 && taskSearch.length === 0 && <p>Nenhuma tarefa encontrada, <span onClick={() => props.setPesquisa("")}>clique aqui</span> para limpar a pesquisa.</p>}

                    {props.filter === "done" && props.pesquisa.length === 0 && tasksDone}
                    {props.filter === "done" && tasksDone.length === 0 && <p>Nenhuma tarefa concluída, <span onClick={() => props.setFilter("todos")}>clique aqui</span> para limpar o filtro.</p>}

                    {props.filter === "pendent" && props.pesquisa.length === 0 && tasksPendent}
                    {props.filter === "pendent" && tasksPendent.length === 0 && <p>Nenhuma tarefa pendente, <span onClick={() => props.setFilter("todos")}>clique aqui</span> para limpar o filtro.</p>}

                    {props.filter === "todos" && props.pesquisa.length === 0 && tasksAll}
                    {props.filter === "todos" && tasksAll.length === 0 && <p>Você ainda não adicionou nenhuma tarefa.</p>}

                </TasksContainer>
            </Container>
        </>

    )
}