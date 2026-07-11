import React, { useEffect } from 'react';
import { AuthProvider as OidcProvider, useAuth } from 'react-oidc-context';
import { useAuthStore } from '../../store/useAuthStore';

/**
 * @description Synchronizes the react-oidc-context state with the Zustand auth store.
 */
const AuthSynchronizer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const { login, logout } = useAuthStore();

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      login({
        id: auth.user.profile.sub,
        username: (auth.user.profile.preferred_username ||
          auth.user.profile.name ||
          'User') as string,
        email: (auth.user.profile.email || '') as string,
      });
    } else if (!auth.isLoading && !auth.isAuthenticated) {
      logout();
    }
  }, [auth.isAuthenticated, auth.user, auth.isLoading, login, logout]);

  return <>{children}</>;
};

/**
 * @description Provider wrapper that initializes the OIDC context.
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const oidcConfig = {
    authority: import.meta.env.VITE_AUTHENTIK_AUTHORITY,
    client_id: import.meta.env.VITE_AUTHENTIK_CLIENT_ID,
    redirect_uri: window.location.origin + '/private/dashboard',
    response_type: 'code',
    scope: 'openid profile email',
    // Ajout de cette propriété pour éviter la boucle lors du chargement initial
    automaticSilentRenew: false,
  };

  if (!oidcConfig.authority || !oidcConfig.client_id) {
    console.error('OIDC Configuration missing. Check your .env file.');
    return <>{children}</>;
  }

  return (
    <OidcProvider {...oidcConfig}>
      <AuthSynchronizer>{children}</AuthSynchronizer>
    </OidcProvider>
  );
};
