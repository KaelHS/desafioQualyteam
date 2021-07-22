import { useEffect, useState } from "react";
import { FiArrowLeft, FiFilter, FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import { Container } from './styles';

export function QueryPage() {

    const [ query, setQuery ] = useState('');
    const [ checkQuery, setCheckQuery ] = useState('non-conformities');

    const history = useHistory();


    async function handleQuery() {
        api.get('')
    }

    function handleChecked(querySelector: string) {
        return checkQuery.includes(querySelector);
    }

    function handleChange({ target }: any) {
        if (target.checked) {
            setCheckQuery(target.value);
        } else {
            setCheckQuery('');
        }
      }

    // useEffect(() => {
    //     console.log('teste')
    // }, [])

    return(
        <Container>
            <button 
                className="navigationButton" 
                onClick={history.goBack}
            >
                <FiArrowLeft size="2rem"/>
            </button>
            <section className="querySection">
                <FiFilter size="5rem"/>
                <div>
                    <input 
                        type="text"
                        value={query}
                        onChange={ ({target}) => setQuery(target.value)} />
                    <button
                        type="button"
                        onClick={handleQuery}>
                            <FiSearch size="2rem"/>
                        </button>
                </div>
                    <form>
                        <label>
                        <input 
                            type="checkbox"
                            value='non-conformities'
                            // checked = {handleChecked('non-conformities')}
                            checked={checkQuery.length == 0 ? true : handleChecked('non-conformities')}
                            onChange={handleChange}
                             />
                             Não Conformidade
                        </label>
                        <label>
                        <input 
                            type="checkbox"
                            value='departments'
                            checked = {handleChecked('departments')}
                            onChange={handleChange}
                             />
                             Departamentos
                        </label>
                        <label>
                        <input 
                            type="checkbox"
                            value='description'
                            checked = {handleChecked('description')}
                            onChange={handleChange}
                             />
                             Descrição
                        </label>
                    </form>
            </section>
            <section className="resultSection">
            </section>
        </Container>
    );
}