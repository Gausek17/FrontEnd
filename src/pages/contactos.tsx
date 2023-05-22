import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/Contactos.module.css'
import Tabla from '../../components/TablaContactos'
import ProgressBarCobro from '../../components/Graficas/BarChartCobro'
import Semantic from '../../components/Semantic'

export default function Contactos() {
    return(
        <div className={styles.panel}>
        <Layout pagina='Contactos'>
        
        
        

        <div className={styles.container}>
        <p style={{color:"rgb(0, 173, 255)", fontFamily:"roboto !important", padding:"1rem",paddingLeft:"0", fontSize:"1.5rem", marginBottom:"0", marginTop:"0"}}>Contactos</p>
            <div className={styles.box}>
                
                    
                        <div style={{padding:"1rem", paddingTop:"1rem"}}>
                            <Tabla/>
                            </div>
                    
                <div className={styles.grafica}>
                
                <Semantic/>
                </div>
            </div>
            
            </div>

        </Layout>
        
        </div>
    )
}