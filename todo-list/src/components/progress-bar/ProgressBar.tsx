
import { Container, Progress } from "./styles";


interface ProgressBarProps {
    bar: number
}

export default function ProgressBar(props: ProgressBarProps) {


    return (
        <Container>
            <Progress value={props.bar} />
        </Container>
    )
}