import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const LightTheme = createMuiTheme({
  palette: {
    type: "light",
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
      default: '#f9f9f9',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#666',
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#fff',
          borderRadius: '4px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ccc',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#999',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#19857b',
        },
      },
    },
  },
});

export default LightTheme;
