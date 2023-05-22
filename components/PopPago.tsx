import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button startIcon={<AddIcon style={{color:"rgb(0, 173, 255)"}} />} sx={{border:"1px solid rgb(0, 173, 255)", color:"rgb(0, 173, 255)", fontFamily:"roboto", textTransform:"capitalize", fontSize:"1rem"}} variant="outlined" onClick={handleClickOpen}>
        Añadir método de pago
      </Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move', color:"rgb(0, 173, 255)", fontWeight:"400" }} id="draggable-dialog-title">
          Añadir método de pago
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{padding:"1rem"}}>
            Selecciona el método de pago:
          </DialogContentText>
          <div style={{display:"flex", flexDirection:"row", padding:"1rem"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
          <FormControlLabel sx={{ marginLeft:'0%', padding:"1rem" , border:"1px solid rgb(182, 182, 182)", borderRadius:"5px",marginTop:"5%", backgroundColor:"white"}}control={<Checkbox  />} label="Transferencia"  style={{color:"#6f6f6f"}}/>
          <FormControlLabel sx={{ marginLeft:'0%', padding:"1rem", border:"1px solid rgb(182, 182, 182)", borderRadius:"5px", marginTop:"5%", backgroundColor:"white" }}control={<Checkbox  />} label="Domiciliación"  style={{color:"#6f6f6f"}}/>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
          <FormControlLabel sx={{ marginLeft:'0%', padding:"1rem", border:"1px solid rgb(182, 182, 182)", borderRadius:"5px", marginTop:"5%", backgroundColor:"white" }}control={<Checkbox  />} label="Efectivo"  style={{color:"#6f6f6f"}}/>
          <FormControlLabel sx={{ marginLeft:'0%', padding:"1rem", border:"1px solid rgb(182, 182, 182)", borderRadius:"5px" , marginTop:"5%", backgroundColor:"white"}}control={<Checkbox  />} label="Contrareembolso"  style={{color:"#6f6f6f"}}/>
          </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:"#ff574a ",border:"1px solid #ff574a ",backgroundColor:"white", ":hover":{backgroundColor:"#ff574a", border:"0px", color:"white"}}} autoFocus onClick={handleClose}>
            Cerrar
          </Button>
          <Button sx={{color:"white", backgroundColor:" rgba(255,157,0,1)", ":hover":{backgroundColor:"#ff574a"}}} onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}