import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Le Login ou le Mot de Passe est incorrect ! — <strong>Recommencez !</strong>
      </Alert>
    </Stack>
  );
}
export default React.memo(DescriptionAlerts);
