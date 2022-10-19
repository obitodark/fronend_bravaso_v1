import { Grid, Typography, Container, Box } from '@mui/material';
import { ViewProductCart, ViewCarrusuelimages, ViewCarruselProduct, ViewCategoriesFeatured } from '../../components';

const ListProduct = () => {
    return (
        <Box>
            <ViewCarrusuelimages />

            <Container maxWidth="xl">
                {/* <ViewCategoriesFeatured /> */}
                <Grid container justifyContent="center" spacing={3} mt={5}>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="initial" sx={{ fontWeight: '300', color: 'rgba(102,102,102)' }}>
                            Productos Recomendados
                        </Typography>
                        <ViewCarruselProduct />
                    </Grid>
                </Grid>

                <ViewProductCart />
                {/* <ViewCarruselProduct /> */}
            </Container>
        </Box>
    );
};

export default ListProduct;
