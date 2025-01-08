import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#224466',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#1e1e1e',
          borderRadius: '4px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#555',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#888',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#90caf9',
        },
      },
    },
  },
});

export default DarkTheme;
