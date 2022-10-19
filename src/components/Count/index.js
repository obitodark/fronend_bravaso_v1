import { Box, Typography, Grid } from '@mui/material';
import { useRef, useContext } from 'react';
import { DataAdminContext } from '../../Context/ContextAdmin/DataProviderAdmin';
import { DataContext } from '../../Context/DataProvider';
import ShoppingCartServices from '../../services/ShoppingCartServices';
// import CircularProgress from '@mui/material/CircularProgress';
const Count = ({ stock, setAmount, cant, id }) => {
    const pathname = window.location.pathname;
    const { bandera, setBandera } = useContext(DataContext);
    // alert(pathname);
    // if (pathname === '/Shopping-Cart') console.log('gagagag');
    const { setStatusDisplay } = useContext(DataAdminContext);
    const countText = useRef();
    const stylesCount = {
        background: '#EEEEEE',

        borderRadius: '5px',
        border: '1px black #DDE2E3',
        fontWeight: 300,
        height: '35px',
        width: '35px',
        textAlign: 'center',
        lineHeight: '35px',
        cursor: 'pointer'
    };

    const updateShopping = async (amount) => {
        const data = {
            product_id: id,
            quantity: Number(amount)
        };
        await ShoppingCartServices.updateShoppingCart(data);
    };

    const handleCountMax = () => {
        setBandera(!bandera);
        if (countText.current.innerText === String(stock)) {
            setStatusDisplay('inline');
            setTimeout(() => setStatusDisplay('none'), 1200);
            return;
        }
        if (countText.current.innerText === '10') return;
        countText.current.innerText = Number(countText.current.innerText) + 1;

        if (pathname !== '/Shopping-Cart') {
            setAmount(Number(countText.current.innerText));
        } else updateShopping(countText.current.innerText);
    };

    const handleCountMin = async () => {
        setBandera(!bandera);
        if (countText.current.innerText === '1') return;
        countText.current.innerText = Number(countText.current.innerText) - 1;
        if (pathname !== '/Shopping-Cart') {
            setAmount(Number(countText.current.innerText));
        } else updateShopping(countText.current.innerText);
    };
    return (
        <Box>
            {/* <CircularProgress color="inherit"  />; */}
            <Grid container direction="row" m={1}>
                <Typography variant="h6" color="initial" sx={stylesCount} onClick={handleCountMin}>
                    -
                </Typography>
                <Typography
                    ref={countText}
                    variant="body1"
                    color="initial"
                    mx={1}
                    sx={{
                        height: '35px',
                        width: '30px',
                        lineHeight: '35px',
                        textAlign: 'center',

                        borderRadius: '5px'
                    }}
                >
                    {pathname === '/Shopping-Cart' ? cant : 1}
                </Typography>
                <Typography variant="h6" color="initial" sx={stylesCount} onClick={handleCountMax}>
                    +
                </Typography>
            </Grid>
        </Box>
    );
};
export default Count;
