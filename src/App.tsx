import { Routes } from './routes';
import { NonConformityProvider } from './hooks/useNonConformity';
import { FakeAuthProvider } from './hooks/useFakeAuth';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <FakeAuthProvider>
      <NonConformityProvider>
        <Routes />
        <GlobalStyle />
      </NonConformityProvider>
    </FakeAuthProvider>
  );
}
