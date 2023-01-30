import { Container, Rows, Items } from "./styles"

export default function Skeleton(){
    return (
        <Container>
            <Rows height={10}>
            <Items width={20} height={60}/>
            <Items width={30} height={60}/>
            </Rows>
            <Rows height={5}>
            <Items width={100} height={100}/>
            </Rows>
            <Rows height={10}>
            <Items width={15} height={80}/>
            <Items width={15} height={80}/>
            <Items width={65} height={80}/>
            </Rows>
            <Rows height={10}>
            <Items width={100} height={80}/>
            </Rows>
            <Rows height={50} direction="column">
            <Items width={50} height={12}/>
            <Items width={60} height={12}/>
            <Items width={100} height={12}/>
            <Items width={40} height={12}/>
            <Items width={70} height={12}/>
            </Rows>
        </Container>
    )
}