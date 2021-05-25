import React, { FunctionComponent, useEffect, useState } from 'react';
import { api } from '../../services/api';
import  { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../interfaces/pages';

import { Container } from './styles';

interface NonConformity {
    id: number;
    title: string;
    description: string;
    "ocurrence-date": string;
    departments: Array<number>;
    'corrective-actions': Array<number>
}

const NonConformity: FunctionComponent<IPage & RouteComponentProps<any>> = ( props ) => {

    const [ nConformity, setNConformity ] = useState<NonConformity>({} as NonConformity);

    useEffect ( () => {

        const slug = props.match.params.slug;

        async function getData () {
            
            const { data } =  await api.get(`/non-conformities/${slug}`);

            setNConformity(data);
        }

        getData();

    }, [props] );

    return (
        <>
        <Container>
            <h1>{nConformity.title}</h1>
            <p>{nConformity.description}</p>
            <p>{nConformity.departments}</p>
            <p>{nConformity['corrective-actions']}</p>

            <div>
                <button
                    type="button"
                >
                    Cadastrar ações corretivas</button>
            </div>
        </Container>
        </>
    );
}

export default withRouter(NonConformity);