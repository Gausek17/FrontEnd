
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Semantic from '../../components/Semantic'
import styles from '../../styles/Contactos.module.css'
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { BiCloudUpload } from "react-icons/bi";
import Tabla from "../../components/EmitidasTabla"
import Button from '@mui/material/Button';
import { GrDocumentUpdate } from "react-icons/gr";
import { useRouter } from 'next/router';



const facturas_enviadas = () => {
    return (
    
        
        <Layout pagina='Facturas emitidas'>
        
        
        

        <div className={styles.contenedor}>
                <p style={{color:"rgb(0, 173, 255)", fontFamily:"roboto !important", padding:"0rem", fontSize:"1.5rem", marginBottom:"0"}}>Facturas emitidas</p>
                <div className={styles.botones}>
                <Button disableElevation variant="contained" onClick={() => {
                    location.href='/formulario'
                }}sx={{backgroundColor:"rgba(255,157,0,1)",width:"200px", borderRadius:"10px", padding:"1rem", color:"white",fontFamily:"roboto !important", ":hover":{backgroundColor:"#ff574a "}}} startIcon={<HiOutlineDocumentPlus />}>
                    Crear factura
                </Button>
                <Button disableElevation variant="contained"   sx={{backgroundColor:"white",width:"200px", borderRadius:"10px",fontFamily:"roboto !important", marginLeft:"2%", padding:"1rem", color:"rgb(0, 173, 255)",border:"1px solid rgb(231, 233, 237)", ":hover":{backgroundColor:"white", border:"1px solid rgb(0, 173, 255) "}}}  startIcon={<BiCloudUpload />}>
                
                    Importar
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                </div>
                <div style={{display:"none"}}>
                <Semantic/>
                </div>
                <div className={styles.tablaFacturas}>
                <Tabla/>
                    
                </div>
                </div>
            

        </Layout>
        
        
    )
}

export default facturas_enviadas