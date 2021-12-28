import { createTheme } from '@material-ui/core/styles';

const Theme = createTheme({
    typography: {
        fontFamily: ['"Readex Pro"', 'sans-serif'].join(',')
      },
      palette: {
        
        primary: {
          main: '#6C63FF'
        }
      }
})

export default Theme;