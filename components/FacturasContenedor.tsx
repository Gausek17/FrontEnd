import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const currencies = [
    {
      value: 'Anulada',
      label: 'Anulada',
    },
    {
      value: 'Regstrada',
      label: 'Registrada',
    },
    {
      value: 'Enviada',
      label: 'Enviada',
    },
    {
      value: 'Pagada',
      label: 'Pagada',
    },
    {
        value: 'Rechazada',
        label: 'Rechazada',
      },
      {
        value: 'Enviada',
        label: 'Enviada',
      },
  ];
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);
export default function FormPropsTextFields() {
  const classes = useStyles();
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{padding:"2%", alignContent:"center",display:"-ms-inline-flexbox"}}>
        <TextField
          required
          id="outlined-required"
          label="Cliente"
          
        />
        
        <TextField
          id="outlined-select-currency"
          select
          label="Estado"
          defaultValue="EUR"
          helperText="Selecciona el estado"
          >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker  label={"Desde"}/>
        <DatePicker label={"Hasta"}/>  
    </LocalizationProvider>
    <Button style={{marginLeft:"3%"}}>Exportar</Button>
    
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Importar
        </Button>
      </label>
      </div>
      
      <div className='adas' style={{padding:"3rem", paddingTop:"1rem", display:"flex", justifyContent:"flex-end"}}>
      <Stack spacing={2} direction="row">
      <Button onClick={() => {
        location.href='/formulario'
  }}variant="contained" endIcon={<AddCircleIcon />}>
        Nuevo
      </Button>
      <Button variant="contained" endIcon={<SearchIcon />}>
        Búsqueda
      </Button>
      <Button variant="contained" endIcon={<DeleteIcon />}>
        Borrar búqueda
      </Button>
    </Stack>
      </div>
      
    </Box>
    
  );
}
