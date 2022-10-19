import { Typography, Container, Grid, Button } from '@mui/material';
import { useState, useContext } from 'react';
import { ViewProductTable, ViewProductFormModal } from '../../components/Layout/index.js';
import { ButtonSecondary } from '../../components/stylesComponentsButton/index.js';
import { DataAdminContext } from '../../Context/ContextAdmin/DataProviderAdmin.js';
// import {  GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';

const AdminListProduct = () => {
    const [openFormModal, setOpenFormModal] = useState(false);
    const { setUtilsData } = useContext(DataAdminContext);

    const handleOpenModal = () => {
        setUtilsData({
            title: 'Crear Producto',
            name_buttom: 'Crear',
            action: false
        });
        setOpenFormModal(true);
    };

    return (
        <div>
            <Container maxWidth="xl">
                <ViewProductFormModal openFormModal={openFormModal} setOpenFormModal={setOpenFormModal} />
                <Typography variant="h5" color="initial" my={1}>
                    Lista de Products
                </Typography>
                <Grid container>
                    <Grid item my={2}>
                        <ButtonSecondary back_color={'#3B8DDA '} back_color_hover={'#629ED7 '} text_size={'18px'} onClick={handleOpenModal}>
                            New Users
                        </ButtonSecondary>
                    </Grid>
                </Grid>
                <ViewProductTable setOpenFormModal={setOpenFormModal} />
                {/* <TableData />; */}
            </Container>
        </div>
    );
};
export default AdminListProduct;
