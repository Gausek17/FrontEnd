import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/Index.module.css'
import ProgressBarCobro from '../../components/Graficas/BarChartCobro'
import ProgressBarFacturado from '../../components/Graficas/BarChartRecibidas'
import Button from '@mui/material/Button';
import { AiOutlineContacts } from "react-icons/ai";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { CiCalculator1 } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CChart } from '@coreui/react-chartjs'
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { BsBarChartSteps } from "react-icons/bs";
import Imagen from "../../public/img/plasmaphone.svg"
import Imagen2 from "../../public/img/iconos.png"
import Image from 'next/image';
import Semantic from '../../components/Semantic'

export default function Home() {
    return(
        <div className={styles.panel}>
        <Layout pagina='home'>
        <div className={styles.container}>
            
            <div className={styles.box}>
										
                    <div className={styles.contenido}>
                        <div className={styles.facturas}>
                          <p style={{color:"rgb(0, 173, 255)", fontFamily:"roboto !important", padding:"0rem", fontSize:"1.5rem"}}>Mi resumen</p>
                            <h6 style={{marginTop:"10%",fontWeight:"300", fontSize:"0.8rem", textTransform:"uppercase", marginLeft:"0%",fontFamily:"roboto !important"}}>Total facturado</h6>
                            <h6 style={{marginTop:"1%", color:"#5db73c", fontSize:"1.1rem",fontFamily:"roboto !important"}}>0,00 €<FiArrowUpRight/></h6>
                            <div style={{width:"150px", display:"flex", padding:"0", marginLeft:"25%"}} >
                
                            <ProgressBarFacturado/>
                </div>
                        </div>
                        <div className={styles.cantidad}>
                            <h5 style={{fontWeight:"300", fontSize:"0.8rem", paddingBottom:"0", marginBottom:"0", textTransform:"uppercase", marginTop:"20%",fontFamily:"roboto !important"}} >Total gastos</h5>
                            <h6 style={{marginTop:"5%", color:"#00adff", fontSize:"1.1rem", paddingTop:"0",fontFamily:"roboto !important"}}>0,00 €<FiArrowDownLeft/></h6>
                            <div style={{width:"150px", display:"flex", padding:"0", marginLeft:"25%"}} >
                
                <ProgressBarCobro/>
                </div>
                        </div>
                    </div>
                

                <div style={{display:"flex", color:"#6f6f6f", flexDirection:"column", padding:"3rem", marginTop:"5%", paddingBottom:"0",paddingRight:"2%"}}>
                <div style={{border:"1px solid rgb(231, 233, 237)", padding:"1rem", paddingBottom:"0px", borderRadius:"5px",width:"200px"}}>
                            <h5 style={{fontSize:"0.8rem", textTransform:"uppercase",fontWeight:"300",fontFamily:"roboto !important"}}>Estimación iva a liquidar</h5>
                            <h6 style={{fontSize:"1rem", marginTop:"0", marginBottom:"5%",color:"rgb(65, 79, 98)",fontFamily:"roboto !important"}}><CiCalculator1 style={{color:"rgb(65, 79, 98)",marginRight:"3%", fontSize:"1.3rem"}}/>0,00 €</h6>
                            
                        </div>
                        <div style={{border:"1px solid rgb(231, 233, 237)", padding:"1rem", paddingBottom:"0px", borderRadius:"5px", marginTop:"10%"}}>
                            <h5 style={{fontSize:"0.8rem",  textTransform:"uppercase",fontWeight:"300",fontFamily:"roboto !important"}}>Balance total<FiInfo style={{marginLeft:"3%"}}/> </h5>
                            <h6 style={{fontSize:"1rem", marginTop:"0", marginBottom:"5%",fontFamily:"roboto !important"}}><FaRegMoneyBillAlt style={{color:"rgb(65, 79, 98)",marginRight:"3%", fontSize:"1.3rem"}}/>0,00 €</h6>
                            
                        </div>
                        </div>
				  <div className='grafica' style={{marginTop:"5%", padding:"2rem", paddingLeft:"0rem", color:"#6f6f6f !important", paddingBottom:"0", width:"300px"}}>
            <h5 style={{color:"#6f6f6f !important",fontFamily:"roboto !important", fontWeight:"400"}}>Mi evolución:</h5>
                <CChart 
                  type="bar"
                  data={{
                  labels: ['E', 'F', 'M', 'A', 'M', 'J', 'J','A','S','O','N','D'],
                  datasets: [
                    {
                      label: 'Ingresos',
                      backgroundColor: '#00adff',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 56,43,34,54],
                      
                    },
                  ],
                  
                }}
                 
                />						
				      </div>



            </div>
            <div className={styles.box2}>
                
                    <h3 style={{color:"rgb(114, 114, 114)",fontSize:"1rem", textTransform:"uppercase", fontWeight:"200", marginTop:"5%", marginLeft:"3%", fontFamily:"roboto"}}>¿Qué deseas hacer?</h3>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Button sx={{backgroundColor:"rgba(255,157,0,1)",fontFamily:"roboto !important",marginTop:"8%",textTransform:"inherit",color:"white",marginLeft:"3%",marginRight:"3%",padding:"1rem",fontSize:"1.2rem", borderRadius:"12px",width:"300px",":hover":{backgroundColor:"#ff574a "}}} variant="contained"startIcon={<HiOutlineDocumentPlus />} disableElevation>
                        Crear nueva factura
                    </Button> 
                    </div>
                    <div style={{display:"flex",justifyContent:"center", marginTop:"5%",padding:"0.5rem"}}>
                    
                    <Button variant="outlined" sx={{textTransform:"inherit",fontSize:"1rem", border:"0px",borderRadius:"15px",fontFamily:"roboto !important" ,color:"#0288d1", flexDirection:"column", padding:"0.9rem",":hover":{border:"0px", borderRadius:"15px"}}}startIcon={<AiOutlineContacts style={{fontSize:"2rem"}}/>}>
                    Añadir nuevo contacto
                    </Button>
                    <Button variant="outlined" sx={{textTransform:"inherit",fontSize:"1rem", border:"0px",borderRadius:"15px",fontFamily:"roboto !important", color:"#0288d1", flexDirection:"column", padding:"0.9rem",":hover":{border:"0px", borderRadius:"15px"}}}startIcon={<HiOutlineDocumentPlus style={{fontSize:"2rem"}} />}>
                    Subir un gasto
                    </Button>
                    <Button variant="outlined" sx={{textTransform:"inherit",fontSize:"1rem", border:"0px",borderRadius:"15px",fontFamily:"roboto !important", color:"#0288d1", flexDirection:"column", padding:"0.9rem",":hover":{border:"0px", borderRadius:"15px"}}} startIcon={<HiOutlineDocumentPlus style={{fontSize:"2rem"}} />}>
                    Crear un presupuesto
                    </Button>
                    
                    </div>

                   
                    
                    </div>
                  
                  <div className='SEGUNDO' style={{display:"flex", paddingBottom:"1rem", fontFamily:"roboto !important"}}>
                  <div className='contenedor2' style={{paddingLeft:"0", fontFamily:"roboto !important"}}>
                  <div style={{backgroundColor:"white",border:"1px solid rgb(231, 233, 237)",borderRadius:"4px", display:"flex", alignContent:"center", flexWrap:"wrap", flexDirection:"column", padding:"1rem", paddingBottom:"0", marginTop:"2%", width:"300px", fontFamily:"roboto !important"}}>
                  <p style={{color:"rgb(0, 173, 255)", fontFamily:"roboto !important", padding:"0rem", fontSize:"1.5rem", marginLeft:"8%"}}>Resumen de gastos</p>
                  <CChart
                    type="doughnut"
                    title='Resumen de Gastos'
                    data={{
                    labels: ['Prueba', 'Prueba1'],
                    datasets: [
                    {
                   backgroundColor: ['#5db73c', 'rgb(0, 173, 255)'],
                    data: [40, 20],
                    },
                    ],
                    }}
                  />
                  </div>

            <div>
            

            </div>    		
          </div>


          <div className='appBox' style={{backgroundColor:"rgb(231, 233, 237)", marginLeft:"3%", display:"none",border:"1px solid rgb(231, 233, 237)", flexWrap:"wrap", justifyContent:"flex-start", borderRadius:"4px"}}>
          <h5 style={{textTransform:"uppercase", fontSize:"0.8rem", fontWeight:"300", marginTop:"5%", color:"rgb(114, 114, 114)", marginLeft:"3%"}}>Descarga nuestra aplicación en tu dispositivo</h5>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <Image alt='app' className="object-cover" src={Imagen} style={{width:"200px", height:"250px", padding:"0", marginLeft:"0%"}} />
          <div style={{display:"flex", flexDirection:"column"}}>
          <Link href="/" style={{color: '#0288d1'}} >Ir a Google Play</Link>
          <Link href="/" style={{color: '#0288d1', marginTop:"25%"}} >Ir a Apple Store</Link>
          <Image alt='app' className="object-cover" src={Imagen2} style={{width:"200px", height:"150px", padding:"0", marginLeft:"3%", marginTop:"5%"}} />
          </div>
          </div>
          <div>
                      

          </div>
          </div>
        

          </div>
          <div style={{backgroundColor:"white",  display:"flex",border:"1px solid rgb(231, 233, 237)",borderRadius:"4px", flexDirection:"column", padding:"1rem", height:"150px", width:"100%", marginTop:"1%"}}>
           <h5 style={{textTransform:"uppercase", fontSize:"1rem", fontWeight:"200", marginTop:"1%", padding:"1rem",paddingLeft:"0", color:"rgb(114, 114, 114)",fontFamily:"roboto !important"}}>Descubre todo lo que puedes hacer en Iridex</h5>
           <Button variant="contained" sx={{fontFamily:"roboto !important"}} startIcon={<BsBarChartSteps />}>
             Configura tu perfil
          </Button>
          
          </div>

          </div>
					<div style={{display:"none"}}>
            <Semantic/>
          </div>
          </Layout>
        
        </div>
    )
}