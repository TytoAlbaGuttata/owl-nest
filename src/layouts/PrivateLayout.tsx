import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { Outlet } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

export const PrivateLayout = () => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated && !auth.error) {
      auth.signinRedirect();
    }
  }, [auth.isLoading, auth.isAuthenticated, auth.error, auth]);

  if (auth.isLoading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (auth.error) {
    return <Typography color="error">Authentication error: {auth.error.message}</Typography>;
  }

  if (!auth.isAuthenticated) {
    return null;
  }

  return <Outlet />;
};
