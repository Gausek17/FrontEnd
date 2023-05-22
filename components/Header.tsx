import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Styles from '../styles/Header.module.css'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { useRouter } from 'next/router';
import ReactLogo from '../public/img/download.svg'

import Image from 'next/image';
const pages = ['Emitidas', 'Recibidas', 'Archivo','Contactos'];
const settings = ['Perfil', 'Cuenta', 'Panel', 'Cerrar sesión'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter();

  return (
    
    <AppBar elevation={0} position="sticky" sx={{backgroundColor:"white", boxShadow:"0px", display:"flex", borderBottom:"1px solid  rgb(231, 233, 237)",paddingLeft:"10.5%", paddingRight:"11%"}}>
      
      <Container maxWidth="xl" sx={{backgroundColor:"white", color:"rgb(22, 36, 53)",boxShadow:"0px", fontFamily:"roboto !important", paddingLeft:"0px"}}>
        <Toolbar disableGutters sx={{ width:"100%"}}>
        <div className={Styles.logo}>
        <Image
        src={ReactLogo}
        width={85}
        height={70}
        alt="Logo"
        
        onClick={() => {
          router.push('/home')
    }}
      />
      </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',color:"rgb(22, 36, 53)"} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > 
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            
              <Button onClick={() => {
        router.push('/facturas_enviadas')
  }}sx={{marginLeft:"2%",borderRadius:"0px",textTransform:"inherit",fontSize:"1.1rem",color:"rgb(22, 36, 53)",fontWeight:"200",fontFamily:"roboto !important" , ":hover":{borderBottom:"2px solid #303ab2",backgroundColor:"white",fontWeight:"400",lineHeight:"3.5em"}}} variant="text" startIcon={<HiOutlineDocumentArrowUp />}>
              Emitidas
            </Button>

            <Button onClick={() => {
        router.push('/facturas_recibidas')
  }}sx={{marginLeft:"2%",borderRadius:"0px",textTransform:"inherit",fontSize:"1.1rem",color:"rgb(22, 36, 53)",fontWeight:"200",fontFamily:"roboto !important" ,":hover":{borderBottom:"2px solid #303ab2",backgroundColor:"white",fontWeight:"400",lineHeight:"3.5em"}}} variant="text" startIcon={<HiOutlineDocumentArrowDown/>}>
              Recibidas
            </Button>

            <Button onClick={() => {
        router.push('/contactos')
  }}sx={{marginLeft:"2%",borderRadius:"0px",textTransform:"inherit",fontSize:"1.1rem",color:"rgb(22, 36, 53)",fontWeight:"200",fontFamily:"roboto !important" ,":hover":{borderBottom:"2px solid #303ab2",backgroundColor:"white",fontWeight:"400",lineHeight:"3.5em"},":hover:after":{transform:"100% 50%"}}} variant="text" startIcon={<MdOutlineContactPage />}>
              Contactos
            </Button>

            <Button onClick={()=>{
              window.open('https://start.docuware.com/es/')
            }}
            sx={{marginLeft:"2%",borderRadius:"0px",textTransform:"inherit",fontSize:"1.1rem",color:"rgb(22, 36, 53)",fontFamily:"roboto !important" ,fontWeight:"200",":hover":{borderBottom:"2px solid #303ab2",backgroundColor:"white",fontWeight:"400",lineHeight:"3.5em"}}} variant="text" startIcon ={<HiOutlineDocumentDuplicate />}>
              Archivo
            </Button>
            
             
          </Box>
          <div className={Styles.movil}>
        <Image
        src={ReactLogo}
        width={85}
        height={70}
        alt="Logo"
        
        onClick={() => {
          router.push('/home')
    }}
      />
      </div>
          <MenuItem>
        <IconButton sx={{color:'rgb(22, 36, 53)' , ":hover":{backgroundColor:"white",color:"var"}}}
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={2} color="error">
            <IoIosNotificationsOutline />
          </Badge>
        </IconButton>
        
      </MenuItem>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Perfil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                 
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;