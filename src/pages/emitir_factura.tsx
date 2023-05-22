import * as React from "react";
import Layout from '../../components/Layout'
import styles from '../../styles/Visualiza.module.css'
import Semantic from '../../components/Semantic'
import Step from '../../components/Step3'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Emitir = () => {
  const router = useRouter();
    return (
        <Layout pagina='Emitir factura'>
        <div className={styles.contenedor}>
        <div className={styles.titulo}>
        <h3 style={{marginLeft:"3%", marginTop:"1%", fontSize:"1.2rem", color:"rgb(0, 173, 255)"}}>Emitir factura</h3>
        <Step/>
        </div>
        <div className={styles.contenido}>
        
        </div>
        <div className={styles.botones}>
       
      <Button onClick={() => {
        router.push('/visualiza_factura')
  }} sx={{color:"#ff574a",border:"1px solid #ff574a", ":hover":{backgroundColor:"#ff574a", border:"1px solid red", color:"white"}}} variant="outlined">Cancelar</Button>
   <Button onClick={() => {
        router.push('/facturas_enviadas')
  }} sx={{backgroundColor:"rgba(255,157,0,1)",marginLeft:"3%", ":hover":{backgroundColor:"#ff574a "}}} variant="contained">Emitir</Button>

        </div>
        </div>


        <div style={{display:"none"}}>
            <Semantic/>
        </div>

        </Layout>
        

        )
}

export default Emitir