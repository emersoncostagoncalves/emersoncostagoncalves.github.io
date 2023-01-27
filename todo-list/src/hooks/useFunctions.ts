
import { useState } from "react";
import useTask from "../core/useTask";

export default function useFunctions() {


    let [newTask, setNewTask] = useState<boolean>(false)
    let [text, setText] = useState<string>("")
    let [id, setId] = useState<number>(0)
    let [isEdit, setIsEdit] = useState<boolean>(false)
    let [editTaskText, setEditTaskText] = useState<string>("")
    let [contador, setContador] = useState<number>(0)
    



    function AddTask(setbar: any, tasks: any, setTasks: any) {
        if (text.replaceAll(" ", "") === "") {
            return
        }
        const task = new useTask(text, "pendent", id, true)
        tasks.push(task)
        setTasks(tasks)
        setNewTask(true)
        setId(id += 1)
        updateBar(setbar, tasks)

    }

    function getTextInput(e: any) {
        
        setText(e.target.value)
    }


    function deleteTask(id: any, setbar: any, tasks: any, setTasks: any) {
        tasks.forEach((el: any) => {
            if (el.state === "done" && el.id === id) {
                setContador(contador -= 1)
            }
        })
        setTasks(tasks = tasks.filter((el: any) => el.id !== id))

        updateBar(setbar, tasks)

    }

    function editTask(task: any) {

        task.disabled = false
        setNewTask(true)
        setEditTaskText(task.text)
    }

    function getEditInputText(e: any) {
        setEditTaskText(e.target.value)
        setNewTask(true)
    }

    function taskDone(e: any, task: any, bar: number, setbar: any, tasks: any) {


        if (e.target.checked) {
            task.state = "done"
            setContador(contador += 1)
            //setContador(contador += 1)

        } else {
            task.state = "pendent"
            setNewTask(true)
            //setContador(contador -= 1)
            setContador(contador -= 1)
        }

        updateBar(setbar, tasks)

    }

    function taskSave(task: any) {

        const meuTexto = editTaskText
        task.disabled = true
        task.text = meuTexto.length === 0 ? task.text : meuTexto
        setNewTask(true)
    }

    function taskCancel(task: any) {
        task.disabled = true
        setNewTask(true)
    }

    function updateBar(setbar: any, tasks: any) {
        const qntTasks = tasks.length
        qntTasks > 0 ? setbar(100 / qntTasks * contador) : setbar(0)

        
    }


    function searchTask(e: any, pesquisa: string, setPesquisa: any) {
        const texto = e.target.value.toLowerCase()
        pesquisa = texto
        setPesquisa(pesquisa)
        
    }

    function setFilterTasks(e: any, filter: string, setFilter: any) {
        const id = e.currentTarget.id
        
        if (filter !== id) {
            filter = id
            setFilter(filter)
        } else {
            filter = "todos"
            setFilter(filter)
        }



       

    }

    return {
        AddTask,
        getTextInput,
        deleteTask,
        editTask,
        text, setText,
        id, setId,
        newTask, setNewTask,
        isEdit, setIsEdit, getEditInputText,
        taskDone, taskSave, taskCancel, searchTask, setFilterTasks

    }
}