import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
const provincias = [
    {
      value: 'Alicante',
      label: 'Alicante',
    },
    {
      value: 'Albacete',
      label: 'Albacete',
    },
    {
      value: 'Asturias',
      label: 'Asturias',
    },
   
  ];
  const paises = [
    {
        value: 'Alemania',
        label: 'Alemania',
      },
    {
      value: 'España',
      label: 'España',
    },
    {
      value: 'Francia',
      label: 'Francia',
    },
    {
      value: 'Italia',
      label: 'Italia',
    },
   
  ];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginLeft:"2%"}}>
      <Button variant="outlined" sx={{padding:"1rem", color:"rgb(0, 173, 255)", border:"1px solid rgb(0, 173, 255)"}} onClick={handleClickOpen}>
        Crear nuevo cliente
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{color:"rgb(0, 173, 255)"}}>Nuevo Cliente</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Introduzca los datos del nuevo cliente.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre Fiscal*"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nº de documento"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
          sx={{width:"64%"}}
            autoFocus
            margin="dense"
            id="name"
            label="Dirección fiscal"
            type="email"
            
            variant="outlined"
          />
          <TextField
          sx={{marginLeft:"2%"}}
            autoFocus
            margin="dense"
            id="name"
            label="Código postal"
            type="email"
            
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ciudad"
            type="email"
            variant="outlined"
          />
          <TextField sx={{ width:"31% !important", marginLeft:"2%", marginTop:"1.4%"}}
          id="outlined-select-currency"
          select
          label="Provincia"
          variant="outlined"
          
        >
          {provincias.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField sx={{ width:"31% !important", marginLeft:"2%", marginTop:"1.4%"}}
          id="outlined-select-currency"
          select
          label="País"
          variant="outlined"
          
        >
          {paises.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:"#ff574a",border:"1px solid #ff574a", ":hover":{backgroundColor:"#ff574a", border:"0px solid red", color:"white"}}} onClick={handleClose}>Cancelar</Button>
          <Button sx={{marginLeft:"2%",backgroundColor:"rgba(255,157,0,1)", ":hover":{backgroundColor:"#ff574a "}}} variant="contained" onClick={handleClose}>Crear</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}