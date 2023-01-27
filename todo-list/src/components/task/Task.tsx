
import { useEffect } from "react"


import ButtonsOnEdit from "./ButtonsOnEdit";
import ButtonsOffEdit from "./ButtonsOffEdit";
import { Container, CheckBox, TextTask } from "./styles";




interface TaskProps {
    text: string
    save: (text: any) => void
    cancel: (text: any) => void
    delete: (text: any, setbar:any,tasks:any, setTasks:any) => void
    edit: (text: any) => void
    done: (text: any, el: any,bar:number, setbar: any, tasks:any) => void
    getText: (text: any) => void
    id: number
    state: string
    task: any
    disabled: boolean
    bar: number
    setbar: any
    tasks: any
    setTasks: any
    
}



export default function Task(props: TaskProps) {

    useEffect(() => {

    })

    return (
        <Container>
            <CheckBox type="checkbox" checked={props.state === "done" ? true : false} onChange={(e: any) => props.done(e, props.task, props.bar, props.setbar, props.tasks)} />

            {props.disabled ? <TextTask type="text" state={props.state} value={props.text} disabled={props.disabled} /> :
                              <TextTask onChange={(e: any) => props.getText(e)} state={props.state} type="text" />}

            <div>
                {!props.disabled ? <ButtonsOnEdit tasks={props.tasks} setTasks={props.setTasks}  save={props.save} cancel={props.cancel} task={props.task} id={props.id} text={props.text} /> : <ButtonsOffEdit task={props.task} tasks={props.tasks} setTasks={props.setTasks} setbar={props.setbar} id={props.id} text={props.text} edit={props.edit} delete={props.delete} />}
            </div>

        </Container>
    )
}