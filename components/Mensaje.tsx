import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  export default function CustomizedSnackbars() {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        
          </Alert>
        </Snackbar>
        <div style={{alignItems:"center"}}>
        <Alert severity="info" sx={{backgroundColor:"#303ab2", fontSize:"1rem", paddingLeft:"3%", borderRadius:"0px",alignItems:"center", display:"flex"}}>¿Quieres utilizar Iridex para todos tus clientes y proveedores? 
        <Tooltip sx={{fontFamily:"roboto"}} title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
      <IconButton sx={{color:"#ef5350", fontFamily:"roboto"}}>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
        <Button disableElevation sx={{backgroundColor:"rgba(255,157,0,1)",fontFamily:"Roboto", borderRadius:"15px",marginLeft:"15px",textTransform:"inherit", ":hover":{backgroundColor:"#ff574a "}}} variant="contained">Suscríbete ya</Button></Alert>
        </div>
      </Stack>
    );
  }
  