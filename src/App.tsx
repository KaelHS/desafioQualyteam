import { Routes } from './routes';
import { NonConformityProvider } from './hooks/useNonConformity';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <NonConformityProvider>
      <Routes />
      <GlobalStyle />
    </NonConformityProvider>
  );
}
