import { App } from '../App';
import IRoute from '../interfaces/route';
import LoginForm from '../pages/Login';
import  NonConformity  from '../pages/NonConformity';

export const routes: IRoute[] = [
    {
        path: '/',
        name: "Home Page",
        component: App,
        exact: true,
    },
    {
        path: '/nonconformity/:slug',
        name: "Non Confofimiies Details",
        component: NonConformity,
        exact: true,
    },
    {
        path: '/login',
        name: "Login Page",
        component: LoginForm,
        exact: true,
    },
];