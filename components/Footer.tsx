import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Header = () => {
    return (
        
        <footer className={styles.footer}>
                <div className={styles.links}>
                    <Link href='/'>Empresa</Link>
                    <Link href='/'>Aviso legal</Link>
                    <Link href='/'>Información</Link>
                </div>
                <div className={styles.registrado}>
                    <p>v1.0.0 © GDX Group, 2022-2023</p>
                </div>
                
        </footer>
        )
}

export default Header