import { TableContainer, TableBody, Table, TableHead, TableRow, TableCell, Grid } from '@mui/material';

function createData(name, value) {
    return { name, value };
}

const DetailsTable = ({ dataProduct }) => {
    const rows = [
        createData('Marca', dataProduct.brand.name),
        createData('Nombre', dataProduct.name),
        createData('Modelo', 262),
        createData('Peso', 305),
        createData('Material', 356),
        createData('Color', 356),
        createData('Origen', 356)
    ];
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={5} xl={5}>
                <TableContainer>
                    <Table sx={{ Width: '300px' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Especificaion Tecnica</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};
export default DetailsTable;
