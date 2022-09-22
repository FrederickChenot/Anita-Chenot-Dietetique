import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#9C27B0',
    },
    secondary: {
      main: '#ffa500',
    },
    alert: {
      main: '#F4511E',
    },
  },
});
export default (customTheme);
