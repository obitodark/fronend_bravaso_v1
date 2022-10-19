import { Avatar, TextField, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Typography } from '@mui/material';
import { ButtonSecondary } from '../../../stylesComponentsButton';
import { DataAdminContext } from '../../../../Context/ContextAdmin/DataProviderAdmin';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import User from '../../../../services/UserServices';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
const TableData = ({ setOpenFormModal }) => {
    const { setIdUser, setUserData } = useContext(DataAdminContext);
    const [filterUsers, setFiltertUsers] = useState([]);
    const getNameInitial = (name) => {
        const names = name.split('');
        return names[0];
    };

    const [listUsers, setListUsers] = useState([]);

    const getListUser = async () => {
        const response = await User.listUser();
        setListUsers(response);
        setFiltertUsers(response);
    };

    const handleDeleteUser = async (id) => {
        Swal.fire({
            title: 'Seguro que desea eliminar este usuario?',
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
        await User.deleteUser(id);
    };

    const handleEditUser = (id) => {
        const dataUser = listUsers.filter((listUser) => listUser.id === Number(id));

        setUserData({
            name: dataUser[0].name,
            last_name: dataUser[0].last_name,
            username: dataUser[0].username,
            dni: dataUser[0].dni,
            email: dataUser[0].email,
            status: dataUser[0].status
        });

        setIdUser(id);
        console.log('filtro po id usuarios', dataUser[0]);
        setOpenFormModal(true);
    };

    const handleFilterUser = (e) => {
        const filtro = listUsers.filter((listUser) => listUser.name.includes(e.target.value));
        console.log('filtro', filtro, e.target.value, typeof filtro, typeof listUsers);
        setFiltertUsers(filtro);
    };
    useEffect(() => {
        getListUser();
    }, []);

    return (
        <TableContainer sx={{ borderRadius: '20px', padding: '10px', background: 'white' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={5}>
                            <Typography variant="h5" color="initial">
                                Usuario Registrados
                            </Typography>
                        </TableCell>
                        <TableCell align="right" colSpan={5}>
                            <TextField
                                id="outlined-search"
                                label="Search "
                                type="search"
                                size="small"
                                defaultValue=""
                                onChange={handleFilterUser}
                            />
                            <SearchIcon sx={{ color: '#9A9A9A', paddingTop: '5px', fontSize: '30px' }} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="center">Avatar</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Lastname</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">Dni</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Type-User</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterUsers.length > 0 &&
                        filterUsers.map((list, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {list.id}
                                </TableCell>
                                <TableCell align="center">
                                    <Avatar sx={{ bgcolor: '#F1294B ', textTransform: 'uppercase' }}> {getNameInitial(list.name)}</Avatar>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {list.name}
                                </TableCell>

                                <TableCell align="center">{list.last_name}</TableCell>
                                <TableCell align="center">{list.username}</TableCell>
                                <TableCell align="center">
                                    <Typography variant="body1" color="#2E8BE9 ">
                                        {list.dni}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">{list.email}</TableCell>
                                <TableCell align="center">{list.role.name}</TableCell>
                                <TableCell align="center">
                                    <ButtonSecondary back_color_hover={'#6A96E9'} onClick={() => handleEditUser(list.id)}>
                                        edit
                                    </ButtonSecondary>
                                </TableCell>
                                <TableCell align="right">
                                    <ButtonSecondary
                                        back_color={'#F1294B '}
                                        back_color_hover={'#E96A6A'}
                                        onClick={() => handleDeleteUser(list.id)}
                                    >
                                        delete
                                    </ButtonSecondary>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default TableData;
