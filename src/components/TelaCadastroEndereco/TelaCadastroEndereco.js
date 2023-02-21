
import { Input, LableInput, Container, RegisterButton } from './style'

export function TelaCadastroEndereco (props) {

    return(
        <Container>
            <LableInput>Endereço:</LableInput>
            <Input id={"telefone"}/>
            <LableInput htmlFor='numero-residencia'>Número da Residência:</LableInput>
            <Input id={"numero-residencia"}/>
            <LableInput htmlFor='complemento'>Complemento:</LableInput>
            <Input id={"complemento"}/>
            <LableInput htmlFor='telefone'>Telefone:</LableInput>
            <Input id={"telefone"}/>
            <RegisterButton onClick={() => props.mudarTela(3)}>Finalizar</RegisterButton>
            
        </Container>
    )
}