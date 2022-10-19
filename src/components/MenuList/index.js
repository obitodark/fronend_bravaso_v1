import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { Avatar, Typography, ListItemText, ListItemIcon, ListItemButton, Box, List, Divider } from '@mui/material';
import Auth from '../../services/AuthServices';
import { useNavigate } from 'react-router-dom';

const MenuList = () => {
    const history = useNavigate();
    const UserName = () => {
        return (
            <Box width="100%" height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={2}>
                <Avatar
                    sx={{ height: '80px', width: '80px' }}
                    src="https://www.drakonball.com/wp-content/uploads/2022/02/habilidades-de-saitama.jpg"
                />
                <Typography variant="h6" color="initial">
                    {JSON.parse(window.atob(localStorage.getItem('token').split('.')[1])).name}
                </Typography>
            </Box>
        );
    };
    return (
        <div>
            <Box mt={12}>
                {localStorage.getItem('token') && <UserName />}
                <Divider sx={{ color: 'black', background: 'black' }} />
            </Box>

            <Box flex={0.5}>
                <List component="nav">
                    <ListItemButton size="small" onClick={() => history('/My-Account')}>
                        <ListItemIcon>{/* <PermIdentityIcon sx={{ marginLeft: '20px', fontSize: '20px' }} /> */}</ListItemIcon>
                        <ListItemText primary="Mis datos" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Iniciar Sesion" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <LocalShippingOutlinedIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Mis Pedidos" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <DiscountOutlinedIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Cupones" />
                    </ListItemButton>
                    <ListItemButton onClick={() => history('/Shopping-Cart')}>
                        <ListItemIcon>
                            <ShoppingCartOutlinedIcon sx={{ marginLeft: '20px', fontSize: '20px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Carrito de Compra" />
                    </ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemButton onClick={() => Auth.SignOut()}>
                        <ListItemText primary="Cerrar Sesion" />
                    </ListItemButton>
                </List>
            </Box>
        </div>
    );
};

export default MenuList;
