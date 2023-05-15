import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import SignalWifi4BarRoundedIcon from '@mui/icons-material/SignalWifi4BarRounded';
import SignalWifiBadRoundedIcon from '@mui/icons-material/SignalWifiBadRounded';
import { Header, Footer, Snackbar } from '../../components';

function Layout() {
    const [loading, setLoading] = useState(true);
    let [online, setIsOnline] = useState('');

    const setOnline = () => {
      setIsOnline('online');
      setTimeout(() => setIsOnline(''), 5000);
    };
    const setOffline = () => {
      setIsOnline('offline');
      setTimeout(() => setIsOnline(''), 5000);
    };
  
    useEffect(() => {
        setTimeout(() => setLoading(false), 200);

        window.addEventListener('offline', setOffline);
        window.addEventListener('online', setOnline);
    
        return () => {
          window.removeEventListener('offline', setOffline);
          window.removeEventListener('online', setOnline);
        }
    }, []);

    return (
        loading === false &&
        <>
            <Box id='container'>
            <Header />
            <Container sx={{ paddingY: '44px', paddingX: { xs: '20px', sm: '100px' }, marginX: 0, maxWidth: { lg: '100%' } }}>
                <Outlet />
            </Container>
            <Footer />
            </Box>

            <Snackbar
                open={online === 'offline'}
                backgroundColor={'red'}
                icon={<SignalWifiBadRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={'Jaringan dalam mode Offline'}
            />
            <Snackbar
                open={online === 'online'}
                backgroundColor={'orange'}
                icon={<SignalWifi4BarRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
                message={'Jaringan dalam mode Online'}
            />
        </>
    )
}

export default Layout;