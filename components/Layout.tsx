import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Mensaje from './Mensaje'
const Layout = ({children, pagina})=> {
    
    return (
        
        <div>
            <Mensaje/>
            <Head>
            
                <title>Iridex - {pagina}</title>
            </Head>

            <Header/>

            {children}


            <Footer/>
            
            
        </div>
    )
}

export default Layout 