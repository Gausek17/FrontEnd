import React from 'react';
import TextField from '@mui/material/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styles from '../styles/formulariofactura.module.css'
import BotonPago from '../components/PopPago'
import { useRouter } from 'next/router';
import Boton from '../components/ButtonNuevoCliente'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '30ch',
        
      },
      root: {
        '& .MuiFormControl-root': {
          margin: theme.spacing(1),
        },
      },
      input: {
        display: 'none',
      },
    },
    
  }),
  
);
const series = [
  {
    value: 'GDX-2023',
    label: 'GDX-2023',
  },
  {
    value: 'Prueba',
    label: 'Prueba',
  },
  {
    value: '2023',
    label: '2023',
  },
 
];

const pagos = [
  {
    value: 'Antonio Jimenez',
    label: 'Antonio Jimenez',
  },
  {
    value: 'Fernando Santos',
    label: 'Fernando Santos',
  },
  {
    value: 'Fran Gutierrez',
    label: 'Fran Gutierrez',
  },
 
];

export default function FormPropsTextFields() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{padding:"1.2rem", paddingLeft:"0", marginLeft:"1.1%"}}>
        <p style={{color:"rgb(54, 54, 54)", fontFamily:"roboto", textTransform:"uppercase", fontWeight:"bold"}}>Cabecera de la factura</p>
      
        
        
        <h3 style={{color:"black", fontFamily:"roboto !important", fontWeight:"400", fontSize:"1rem"}}>Cliente*</h3>
      </div>
      <div style={{padding:"1rem", paddingTop:"0.4rem", paddingLeft:"0", marginLeft:"1.2%", display:"flex", flexWrap:"wrap", justifyContent:"space-between", flexDirection:"row"}}>
        
        <div>
        <div style={{display:"flex"}}>
        <TextField sx={{ width:"38% !important"}}
          id="outlined-select-currency"
          select
          label="Elegir un contacto"
          variant="outlined"
          
        >
          {pagos.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <Boton/>
        <TextField sx={{ width:"34% !important", marginLeft:"2%"}}
          id="outlined-select-currency"
          select
          label="Serie*"
          variant="outlined"
          
        >
          {series.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        

<div style={{padding:"1rem",paddingBottom:"5rem", display:"flex", borderBottom:"1px solid #b6b6b6", paddingLeft:"0"}}>
<TextField sx={{ marginLeft:'0%', width:"300px !important" }} id="outlined-basic" label="Número de factura*" variant="outlined" />
      
        
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Fecha de factura*" sx={{marginLeft:"2%"}} />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Vencimiento*" sx={{marginLeft:"2%"}}/>
    </LocalizationProvider>
      </div>
</div>
<div style={{display:"flex"}}>
<div style={{fontFamily:"roboto", color:"black", padding:"1rem", border:"0px solid rgba(255,157,0,1)", width:"350px", marginLeft:"0%",marginRight:"5%", height:"200px", borderRadius:"5px", backgroundColor:"rgba(255,157,0,.1)"}}>
  <p style={{ color:"black"}}>Datos del cliente:</p>
  <p style={{color:"rgb(145, 145, 145)"}}>NIF</p>
  <p style={{color:"rgb(145, 145, 145)"}}>Razón social</p>
  <p style={{color:"rgb(145, 145, 145)"}}>IBAN</p>
  <p style={{color:"rgb(145, 145, 145)"}}>Dirección</p>
</div>
</div>
      </div>
      
      <div style={{  padding:"1rem", borderBottom:"1px solid #b6b6b6", paddingLeft:"0"}}>
      <p style={{color:"rgb(54, 54, 54)", fontFamily:"roboto", textTransform:"uppercase", fontWeight:"bold", marginLeft:"1%"}}>Conceptos</p>
      <TextField sx={{marginLeft:"1%", width:"25%"}} id="outlined-basic" label="Añadir concepto" variant="outlined" />
      <TextField sx={{marginLeft:"1%", width:"10%"}} id="outlined-basic" label="Ud.*" variant="outlined" />
      <TextField sx={{marginLeft:"1%", width:"10%"}} id="outlined-basic" label="Precio ud.*" variant="outlined" />
      <TextField sx={{ width:"18% !important", marginLeft:"1%"}}
          id="outlined-select-currency"
          select
          label="Impuestos*"
          variant="outlined"
          
        >
          {pagos.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField sx={{marginLeft:"1%", width:"10%"}} id="outlined-basic" label="Total" variant="outlined" />
        <TextField sx={{width:"500px !important", marginLeft:"1%", marginTop:"1%"}}
          id="outlined-multiline-static"
          label="Información adicional del producto"
          multiline
          rows={3}
          
        />

    

      </div>
      <div style={{  padding:"1rem", borderBottom:"1px solid #b6b6b6", display:"flex"}}>
      <p style={{color:"rgb(54, 54, 54)", fontFamily:"roboto", textTransform:"uppercase", fontWeight:"bold"}}>Opciones Avanzadas</p>
      <div style={{padding:"1rem", width:"100%"}}>
      <FormControlLabel sx={{ marginLeft:'2%' }}control={<Checkbox  />} label="Recargo de equivalencia"  style={{color:"#6f6f6f"}}/>
      <FormControlLabel sx={{ marginLeft:'2%' }}control={<Checkbox  />} label="Añadir gastos suplidos"  style={{color:"#6f6f6f"}}/>     
      <FormControlLabel sx={{ marginLeft:'2%' }}control={<Checkbox  />} label="Incluir retención/IRPF"  style={{color:"#6f6f6f"}}/>
      <FormControlLabel sx={{ marginLeft:'2%' }}control={<Checkbox  />} label="Cantidad ya pagada"  style={{color:"#6f6f6f"}}/>
      </div>
      </div>
      <div style={{  padding:"1rem", borderBottom:"1px solid #b6b6b6"}}>
      <p style={{color:"rgb(54, 54, 54)", fontFamily:"roboto", textTransform:"uppercase", fontWeight:"bold"}}>Método de pago</p>
      <div style={{justifyContent:"space-between", display:"flex", alignItems:"center"}}>
      <BotonPago/>
      <div className={styles.total}>
      <h4 style={{fontFamily:"roboto !important"}}>Base Imponible:</h4>
      <h5 style={{fontFamily:"roboto !important"}}>IVA:</h5>
      <h4 style={{fontFamily:"roboto !important"}}>Total:</h4>
      </div>
    </div>
    

      </div>
      <div className={styles.botones}>
     
      <Button disableElevation onClick={() => {
        router.push('/facturas_enviadas')
  }} sx={{color:"#ff574a",border:"1px solid #ff574a", ":hover":{backgroundColor:"#ff574a", border:"0px solid red", color:"white"}}} variant="outlined">Cancelar</Button>
   <Button disableElevation onClick={() => {
        router.push('/visualiza_factura')
  }} sx={{marginLeft:"2%",backgroundColor:"rgba(255,157,0,1)", ":hover":{backgroundColor:"#ff574a "}}} variant="contained">Visualizar</Button>
      </div>
    </form>
  );
}