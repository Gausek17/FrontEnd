import * as React from "react";
import Layout from '../../components/Layout'
import styles from '../../styles/Visualiza.module.css'
import Semantic from '../../components/Semantic'
import Step from '../../components/Step2'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Visualiza = () => {
  const router = useRouter();
    return (
        <Layout pagina='Visualizar factura'>
        <div className={styles.contenedor}>
        <div className={styles.titulo}>
        <h3 style={{marginLeft:"3%", marginTop:"1%", fontSize:"1.2rem", color:"rgb(0, 173, 255)", fontFamily:"roboto", fontWeight:"400"}}>Visualización factura</h3>
        <Step/>
        </div>
        <div className={styles.contenido}>
        <iframe src="docs/ReactJS.pdf" frameBorder="0"></iframe>
        </div>
        <div className={styles.botones}>
        
      <Button onClick={() => {
        router.push('/formulario')
  }} sx={{color:"#ff574a",border:"1px solid #ff574a", ":hover":{backgroundColor:"#ff574a", border:"1px solid red", color:"white"}}} variant="outlined">Cancelar</Button>
  <Button onClick={() => {
        router.push('/emitir_factura')
  }} sx={{marginLeft:"3%",backgroundColor:"rgba(255,157,0,1)",fontFamily:"roboto !important", ":hover":{backgroundColor:"#ff574a "}}} variant="contained">Siguiente</Button>

        </div>
        </div>


        <div style={{display:"none"}}>
            <Semantic/>
        </div>

        </Layout>
        

        )
}

export default Visualiza