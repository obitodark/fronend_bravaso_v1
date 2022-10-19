import { Avatar, Typography, ListItemIcon, Grid, ListItemText, ListItemButton, List, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
// import { useState } from 'react';

const ListOptionAccount = ({ setIndex }) => {
    // const [selectedIndex, setSelectedIndex] = useState(1);

    // const handleListItemClick = (event, index) => {
    //     setSelectedIndex(index);
    // };
    // const style_text = {
    //     textAlign: 'center'
    // };
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Grid Container spacing={1}>
                <Grid
                    item
                    conteiner
                    // width="100%"
                    display="flex"
                    flexDirection="row"
                    // alignItems="atart"
                    // justifyContent="start"
                    bgcolor="white"
                    py={3}
                >
                    <Grid item mx={2}>
                        <Avatar
                            sx={{ height: '70px', width: '70px' }}
                            src="https://www.drakonball.com/wp-content/uploads/2022/02/habilidades-de-saitama.jpg"
                        />
                    </Grid>
                    <Grid container item sx={{ justifyContent: 'center', alignContent: 'center' }}>
                        <Grid item xs={12}>
                            <Typography variant="h6" color="initial">
                                HOLA
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" color="initial">
                                {JSON.parse(window.atob(localStorage.getItem('token').split('.')[1])).name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item bgcolor="white" mt={2.5} mb={2} xs={12}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton onClick={() => setIndex(0)}>
                            <ListItemIcon>
                                <AccountCircleOutlinedIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                            </ListItemIcon>
                            <ListItemText primary="Mi Datos Personales" />
                        </ListItemButton>
                        <ListItemButton onClick={() => setIndex(1)}>
                            <ListItemIcon>
                                <DiscountOutlinedIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                            </ListItemIcon>
                            <ListItemText primary="Cupones" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <CreditCardOutlinedIcon sx={{ marginLeft: '20px', fontSize: '18px' }} />
                            </ListItemIcon>
                            <ListItemText primary="Medios de Pagos" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalShippingOutlinedIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                            </ListItemIcon>
                            <ListItemText primary="Mis Pedidos" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <CloseIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                            </ListItemIcon>
                            <ListItemText primary="Cerrar Sesion" />
                        </ListItemButton>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};
export default ListOptionAccount;
