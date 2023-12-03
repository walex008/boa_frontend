import { createTheme } from '@mui/material/styles';
import { useAppSelector } from '../../app/hooks';
import { mode } from '../../appSlices/generalSlice';




const MuiThemes = () => {
    const darkMode=useAppSelector(mode)
    const darkTheme = createTheme({
        palette: {
          mode:darkMode==="true"? 'dark':"light",
        },
      });
  return darkTheme
}

export default MuiThemes


