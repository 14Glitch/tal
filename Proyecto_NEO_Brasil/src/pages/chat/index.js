import { useEffect } from 'react';

// material-ui
import { Stack, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { VideoCameraOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Chat = () => {

    const tkGlobal = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vY2hhdC5tZWRpcXVvLmNvbS9zZGsvdjEvcGF0aWVudHMvYXV0aGVudGljYXRlIiwiaWF0IjoxNjg0NTI3NDQ5LCJuYmYiOjE2ODQ1Mjc0NDksImp0aSI6IjZiaWRHZ0ZESkRWNlhWcWIiLCJzdWIiOiI2MzkzMzRhYy1kMWRmLTRiNDQtODc1ZS1jMTFmZjA0MTg3OWEiLCJwcnYiOiI5ZWE0MGYwOTkzNTg5YTc4ZDUyYWNlOGM1M2MzMDU5MzUyMGVkNDI3In0.vfOGJX1XKESswIdUudzUipXZzoNChbVHlfiJEAByixQ"

    const { tk } = useSelector((state) => state.auth);

    useEffect(() => {
        const onPageLoad = () => {
            initChat();
        };

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            window.removeEventListener('load', onPageLoad)
        }

        return () => closeChat();
    }, []);

    function initChat() {
        console.log("initChat", tk)
        window.MediquoWidget.init({
            apiKey: "DZSZ021B9CiOEB7W",
            accessToken: `${tk.access_token || tkGlobal}`,
            theme: {
                locale: "pt"
            },
        });
    }

    function openChat() {
        window.MediquoWidget.open();
    }

    function closeChat() {
        console.log('closeChat');
        window.MediquoWidget.destroy();
    }

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    return (<MainCard>
        <Stack direction="row" spacing={6} justifyContent="center" sx={{ mt: 7 }}>
            <Typography variant="h3">
                Clique no botão abaixo para acessar a listagem de profissionais.
            </Typography>
        </Stack>


        <Stack direction="row" spacing={6} justifyContent="center" sx={{ mt: 7 }}>
            <Button onClick={openChat} size="large" variant="contained" endIcon={<VideoCameraOutlined />}>
                Iniciar Atendimento
            </Button>
        </Stack>
    </MainCard>)
};

export default Chat;
