import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AuthProvider, AuthService } from 'react-oauth2-pkce';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const authService = new AuthService({
  clientId: 'tars-quality-dev',
  location: window.location,
  provider: '',
  authorizeEndpoint:
    'http://localhost:8086/auth/realms/master/protocol/openid-connect/auth',
  tokenEndpoint:
    'http://localhost:8086/auth/realms/master/protocol/openid-connect/token',
  redirectUri: window.location.origin,
  scopes: ['profile'],
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <AuthProvider authService={authService}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
