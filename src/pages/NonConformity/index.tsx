import { useEffect } from 'react';
import { api } from '../../services/api';
import  { RouteComponentProps, useRouteMatch, useParams, BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import { useNonConformity } from '../../contexts/useNonConformity';




export function NonConformity (  ) {

    const { nonConformities } = useNonConformity();
    
    const { nonConformityId }  = useParams();

    const { path, url } = useRouteMatch();  

    const nonConformity = nonConformities.find( ({ id }) => id === nonConformityId )



    useEffect ( () => {
        api.get(`/non-conformities/${id}`);
    }, id );

    return (
        <div>
            <h2> teste </h2>
        </div>
    );
}