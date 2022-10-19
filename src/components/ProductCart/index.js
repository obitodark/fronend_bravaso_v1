import { Grid, Typography, Pagination, Container } from '@mui/material';

import { useContext, useEffect } from 'react';
import Products from '../Products';
import ListCategories from '../ListCategories';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BoxFilter from '../BoxFilter';
import ImagesBrands from '../ImagesBrands';
import { DataContext } from '../../Context/DataProvider';

import FavoriteProductServices from '../../services/ProductFavoriteServices';
import { useState, useCallback } from 'react';

const styleText = {
    fontSize: { xs: '11px', sm: '14px' },
    whiteSpace: { xs: 'nowrap', sm: 'normal' },
    textOverflow: { xs: 'ellipsis', sm: 'clip' },
    overflow: { xs: 'hidden', sm: 'visible' }
};

const ProductCart = () => {
    let [refresh, setRefresh] = useState(false);
    const { filterByProduct } = useContext(DataContext);
    const [ids, setIds] = useState([]);

    const [, updateState] = useState();
    const handleForceupdateMethod = useCallback(() => updateState({}), []);
    const getlist = async () => {
        const response = await FavoriteProductServices.listProductFavites();
        if (response === undefined) return;
        const favo = response.map((id) => {
            return id.product.id;
        });
        await setIds(favo);
        console.log('list', favo);
    };
    const addElement = (data) => {
        if (ids === undefined) return;
        ids.filter((dat) => dat === data.id).length > 0 ? (data.favo = 1) : (data.favo = 0);
    };
    useEffect(() => {
        getlist();
    }, [refresh]);
    const ProductNotfound = () => {
        return (
            <Container maxWidth="xl">
                <Grid container justify="center" mt={10}>
                    <Grid item xs={12}>
                        <Typography variant="h4" color="#6a5de3" textAlign="center">
                            <ProductionQuantityLimitsIcon sx={{ fontSize: '60px' }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" color="#8A8A8A" textAlign="center">
                            Lo sentimos, no encontramos resultados
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1" color="initial" textAlign="center">
                            Tal vez su búsqueda fue demasiado específica, intente buscar con un término más general
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        );
    };

    return (
        <Container maxWidth="xl" sx={{ marginTop: '60px' }}>
            <Grid item container xs={12} justifyContent="center" spacing={1.5}>
                <Grid item container xs={12} justifyContent="space-between">
                    <Grid item my={1}>
                        <Typography variant="h5" textAlign="left" sx={{ fontWeight: '300', color: 'rgba(102,102,102)' }}>
                            Lista de Productos
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Grid>
                </Grid>

                <Grid item container md={2.5} xl={2.5} sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Grid item sx={{ background: 'white', border: '1px rgba(202, 198, 198,0.4) solid ', borderRadius: '7px' }} p={2}>
                        <Typography variant="h6" my={2} sx={{ fontWeight: 400 }}>
                            Categories
                        </Typography>
                        <ListCategories />
                    </Grid>
                    <Grid item sx={{ background: 'white', border: '1px rgba(202, 198, 198,0.4) solid ', borderRadius: '7px' }} mt={3} p={2}>
                        <Typography variant="h6" my={2} sx={{ fontWeight: 400 }}>
                            Marcas Destacadas
                        </Typography>

                        <ImagesBrands />
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={12} md={9.5} xl={9.5} spacing={1.5}>
                    <Grid
                        item
                        container
                        // columns={{ xs: 12, sm: 20 }}

                        spacing={{ xs: 0.5, sm: 1.5 }}
                        sx={{ height: '100%' }}
                        justifyContent="start"
                        alignContent="start"
                    >
                        <Grid item xs={12}>
                            <BoxFilter />
                        </Grid>
                        {filterByProduct.length > 0 ? (
                            filterByProduct.map((data, index) => (
                                <Grid item key={index} xs={6} sm={4} md={3} xl={2.4}>
                                    {addElement(data)}

                                    <Products
                                        data={data}
                                        styleText={styleText}
                                        refresh={refresh}
                                        setRefresh={setRefresh}
                                        handleForceupdateMethod={handleForceupdateMethod}
                                    />
                                </Grid>
                            ))
                        ) : (
                            <ProductNotfound />
                        )}
                    </Grid>
                </Grid>

                <Grid item container xs={12} my={15} justifyContent="end">
                    <Grid item>
                        <Pagination count={11} variant="outlined" shape="rounded" />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductCart;
