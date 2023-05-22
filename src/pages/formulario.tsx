import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/Contactos.module.css'
import Semantic from '../../components/Semantic'
import Tabla from '../../components/FormularioNuevaFactura'
import Steps from '../../components/Step1'
export default function Home() {
    return(

            <div className={styles.panel}>
            	<Layout pagina='Crear factura'>
            		<div className={styles.container}>
                
                	<div className={styles.box}>
                    <div className={styles.title}>
                        <h4 style={{padding:"1rem",marginLeft:"1.1%",  marginTop:"1.1%", fontFamily:"roboto !important",fontWeight:"400", fontSize:"1.5rem"}}>Crear factura</h4>
                        <Steps/>
                    </div>
                        <div style={{padding:"1rem", paddingTop:"0"}}>
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