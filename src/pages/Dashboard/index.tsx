import { Container } from './styles';

export function Dashboard(){
    return(
        <Container>
            <div>
                <header>Total de Não Conformidades Cadastradas</header>
                <p>10</p>
            </div>
            <div>
                <header>Não Conformidades Resolvidas</header>
                <p>6</p>
            </div>
            <div>
                <header>Não Conformidades Pendentes</header>
                <p>4</p>
            </div>
        </Container>
    );
}