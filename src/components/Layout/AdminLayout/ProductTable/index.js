import { Avatar, TextField, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Typography } from '@mui/material';
import { ButtonSecondary } from '../../../stylesComponentsButton';
import { DataAdminContext } from '../../../../Context/ContextAdmin/DataProviderAdmin';
import { useContext, useCallback } from 'react';
import Swal from 'sweetalert2';
import SearchIcon from '@mui/icons-material/Search';
import { DataContext } from '../../../../Context/DataProvider';
import Products from '../../../../services/ProductsServices';
import { DataGrid } from '@mui/x-data-grid';
const TableData = ({ setOpenFormModal }) => {
    const { setListProduct, listProduct, filterProduct, setFiltertProduct } = useContext(DataContext);
    const { setIdProduct, setProductData, productData, setUtilsData } = useContext(DataAdminContext);

    // *********************************************

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'image',
            headerName: 'Image',
            width: 80,
            editable: true,
            renderCell: (params) => <img width={60} src={params.value} /> // renderCell will render the component
        },
        { field: 'name', headerName: 'Name', width: 400 },
        { field: `namebrand`, headerName: 'brand', width: 150 },
        { field: `price`, headerName: 'price', width: 100 },
        { field: `stock`, headerName: 'stock', width: 50 },
        { field: `namecategoria`, headerName: 'categoria', width: 150 },
        { field: `namesubcategoria`, headerName: 'categoria', width: 100 },
        {
            field: 'clck',
            headerName: 'action',
            width: 150,
            renderCell: (params) => {
                // you will find row info in params
                // console.log(params.id);
                return (
                    <ButtonSecondary
                        back_color={'#3B8DDA '}
                        back_color_hover={'#6A96E9'}
                        text_size={'15px'}
                        onClick={() => handleEditProduct(params.id)}
                    >
                        edit
                    </ButtonSecondary>
                );
            }
        },
        {
            field: '',
            headerName: 'action',
            width: 150,
            renderCell: (params) => {
                // you will find row info in params
                return (
                    <ButtonSecondary
                        back_color={'#F1294B '}
                        back_color_hover={'#E96A6A'}
                        text_size={'15px'}
                        // onClick={() => handleDeleteUser(list.id)}
                    >
                        delete
                    </ButtonSecondary>
                );
            }
        }
        // { field: 'firstName', headerName: 'First name', width: 130 },
        // { field: 'lastName', headerName: 'Last name', width: 130 },
        // {
        //     field: 'age',
        //     headerName: 'Age',
        //     type: 'number',
        //     width: 90
        // },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
        // }
    ];

    const data = listProduct.map((data) => {
        data.namebrand = data.brand.name;
        data.namecategoria = data.category.name;
        data.namesubcategoria = data.subcategory.name;
        return data;
    });
    const rows = data;
    const getRowSpacing = useCallback((params) => {
        return {
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5
        };
    }, []);
    // *********************************************

    const handleDeleteUser = async (id) => {
        Swal.fire({
            title: `Seguro que desea eliminar este Producto?`,
            text: 'esta accion no podra ser revertido!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id);
                Swal.fire('Se ha Borrado', 'usuario eliminado', 'success');
                window.location.reload();
            }
        });
    };

    const deleteUser = async (id) => {
        await Products.deleteProduct(id);
    };

    const typeAction = () => {
        setUtilsData({
            title: 'Actulizar Producto',
            name_buttom: 'actulizar',
            action: true
        });
    };

    const handleEditProduct = (id) => {
        typeAction();
        const dataProduct = listProduct.filter((listUser) => listUser.id === Number(id));

        setProductData({
            name: dataProduct[0].name,
            description: dataProduct[0].description,
            price: dataProduct[0].price,
            image: dataProduct[0].image,
            stock: dataProduct[0].stock,
            category_id: dataProduct[0].category.id,
            subcategory_id: dataProduct[0].subcategory.id,
            brand_id: dataProduct[0].brand.id,
            // source_id: dataProduct[0].source_products.id,
            status: dataProduct[0].status
        });

        setIdProduct(id);
        // console.log('filtro po id productos', dataProduct[0].category);
        setOpenFormModal(true);
    };

    const handleFilterUser = (e) => {
        const filtro = listProduct.filter((listUser) => listUser.name.toLowerCase().includes(e.target.value.toLowerCase()));
        console.log('filtro', filtro, e.target.value, typeof filtro, typeof listUsers);
        setFiltertProduct(filtro);
    };
    // console.log('listas de prodcutos', listProduct[0].name);
    return (
        // <TableContainer component={Paper}>
        //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell colSpan={5}>
        //                     <Typography variant="h5" color="initial">
        //                         Productos registrados
        //                     </Typography>
        //                 </TableCell>
        //                 <TableCell align="right" colSpan={5}>
        //                     <TextField
        //                         id="outlined-search"
        //                         label="Search "
        //                         type="search"
        //                         size="small"
        //                         defaultValue=""
        //                         onChange={handleFilterUser}
        //                     />
        //                     <SearchIcon sx={{ color: '#9A9A9A', paddingTop: '5px', fontSize: '30px' }} />
        //                 </TableCell>
        //             </TableRow>

        //             <TableRow>
        //                 <TableCell>Id</TableCell>
        //                 <TableCell align="center">Image</TableCell>
        //                 <TableCell align="center">Name</TableCell>
        //                 <TableCell align="center">Brand</TableCell>
        //                 <TableCell align="center">Price</TableCell>
        //                 <TableCell align="center">Stock</TableCell>
        //                 <TableCell align="center">Category</TableCell>
        //                 <TableCell align="center">SubCategory</TableCell>
        //                 <TableCell align="center"></TableCell>
        //                 <TableCell align="center"></TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {filterProduct.length > 0 &&
        //                 filterProduct.map((list, index) => (
        //                     <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        //                         <TableCell component="th" scope="row">
        //                             {list.id}
        //                         </TableCell>
        //                         <TableCell align="center">
        //                             <Avatar
        //                                 sx={{ bgcolor: '#F1294B ', textTransform: 'uppercase', height: '60px', width: '60px' }}
        //                                 variant="rounded"
        //                                 src={list.image}
        //                             >
        //                                 {' '}
        //                                 p
        //                             </Avatar>
        //                         </TableCell>
        //                         <TableCell component="th" scope="row">
        //                             {list.name}
        //                         </TableCell>

        //                         <TableCell align="center">{list.brand.name}</TableCell>
        //                         <TableCell align="center">
        //                             <Typography variant="body2" color="#3BDAAA " sx={{ fontWeight: 800 }}>
        //                                 {'PEN ' + list.price}
        //                             </Typography>
        //                         </TableCell>
        //                         <TableCell align="center">{list.stock}</TableCell>
        //                         <TableCell align="center">{list.category.name}</TableCell>
        //                         <TableCell align="center">{list.subcategory.name}</TableCell>
        //                         <TableCell align="center">
        //                             <ButtonSecondary
        //                                 back_color={'#3B8DDA '}
        //                                 back_color_hover={'#6A96E9'}
        //                                 text_size={'15px'}
        //                                 onClick={() => handleEditProduct(list.id)}
        //                             >
        //                                 edit
        //                             </ButtonSecondary>
        //                         </TableCell>
        //                         <TableCell align="right">
        //                             <ButtonSecondary
        //                                 back_color={'#F1294B '}
        //                                 back_color_hover={'#E96A6A'}
        //                                 text_size={'15px'}
        //                                 onClick={() => handleDeleteUser(list.id)}
        //                             >
        //                                 delete
        //                             </ButtonSecondary>
        //                         </TableCell>
        //                     </TableRow>
        //                 ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
        <div style={{ height: 600, width: '100%', background: 'white', borderRadius: '5px', padding: '10px' }}>
            {/* {console.log('lista', data)} */}
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                rowHeight={70}
                getRowSpacing={getRowSpacing}
                getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
            />
        </div>
    );
};
export default TableData;
