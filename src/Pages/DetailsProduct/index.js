import { Grid, Container, Typography, Divider } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { ViewDetailsImage, ViewDetailsData, ViewDetailsTabs, ViewCarruselProduct } from '../../components';
import { DataContext } from '../../Context/DataProvider';

const DetailsProduct = () => {
    const { listProduct, idProduct } = useContext(DataContext);
    const [dataProduct, setDataProduct] = useState([]);
    const getProduct = async () => {
        const product = listProduct.filter((data) => data.id === idProduct);
        await setDataProduct(product[0]);
    };
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid
                container
                mt={10}
                p={3}
                sx={{ border: '1px rgba(202, 198, 198,0.4) solid ', background: 'white', borderRadius: '5px' }}
                justifyContent="center"
            >
                <Grid item xs={12} m={1}>
                    <Typography variant="h5" color="initial" px={3} sx={{ color: '#787878', fontWeight: 300 }}>
                        Detalle de producto
                    </Typography>
                    <Typography variant="body1" color="initial" px={3} sx={{ color: '#787878', fontWeight: 300 }}>
                        Inicio/Detalle-Producto/{dataProduct.brand !== undefined && dataProduct.subcategory.name}
                    </Typography>
                    <Divider variant="middle" sx={{ background: 'black' }} />
                </Grid>

                <Grid item container xs={12} sm={8} md={5} xl={4} justifyContent="center">
                    <Grid item xs={12}>
                        <ViewDetailsImage dataProduct={dataProduct} />
                    </Grid>
                </Grid>
                <Grid item p={1} mx={3} xs={12} sm={12} md={6} xl={5}>
                    <ViewDetailsData dataProduct={dataProduct} />
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                mt={4}
                p={3}
                sx={{ border: '1px rgba(202, 198, 198,0.4) solid ', background: '#eeeeee', borderRadius: '5px' }}
            >
                <ViewDetailsTabs dataProduct={dataProduct} />
            </Grid>
            <Grid
                item
                xs={12}
                mt={4}
                p={3}
                sx={{ border: '1px rgba(202, 198, 198,0.4) solid ', background: '#EEEEEE', borderRadius: '5px' }}
            >
                <Typography variant="h5" color="initial" m={2}>
                    Productos Relacionados que podrían interesarte
                </Typography>
                <ViewCarruselProduct />
            </Grid>
        </Container>
    );
};
export default DetailsProduct;
