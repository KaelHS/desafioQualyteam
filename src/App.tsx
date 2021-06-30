import { Routes } from './routes';
import { NonConformityProvider } from './hooks/useNonConformity';

import { GlobalStyle } from './styles/global';
import { CustomSelect } from './components/Multiselect';

export function App() {
  return (
    <NonConformityProvider>
      <Routes />
      <GlobalStyle />
    </NonConformityProvider>
  );
}
