import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Semantic from '../../components/Semantic'
import styles from '../../styles/Contactos.module.css'
import Contenedor from '../../components/FacturasContenedor'
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { BiCloudUpload } from "react-icons/bi";
import Tabla from "../../components/RecibidasTabla"
import Button from '@mui/material/Button';
const facturas_recibidas = () => {
    return (
    
        
    
        
            <Layout pagina='Facturas recibidas'>
            
            
            
    
            <div className={styles.contenedor}>
            <p style={{color:"rgb(0, 173, 255)", fontFamily:"roboto !important", padding:"0rem", fontSize:"1.5rem", marginBottom:"0"}}>Facturas recibidas</p>
                    <div className={styles.botones}>
                    <Button disableElevation variant="contained" sx={{backgroundColor:"rgba(255,157,0,1)",width:"200px", borderRadius:"10px", padding:"1rem", color:"white",fontFamily:"roboto !important", ":hover":{backgroundColor:"#ff574a "}}} startIcon={<HiOutlineDocumentPlus />}>
                        Subir factura
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

export default facturas_recibidas