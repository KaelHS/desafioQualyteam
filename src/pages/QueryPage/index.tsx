import { FiFilter, FiSearch } from "react-icons/fi";

import { Container } from './styles';

export function QueryPage() {
    return(
        <Container>
            <section className="querySection">
                <FiFilter size="5rem"/>
                <div>
                    <input type="text" />
                    <button
                        type="submit">
                            <FiSearch size="2rem"/>
                        </button>
                </div>
            </section>
            <section className="resultSection"></section>
        </Container>
    );
}