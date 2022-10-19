import { Typography, Modal, Box, Grid, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { DataAdminContext } from '../../Context/ContextAdmin/DataProviderAdmin';

import User from '../../services/UserServices';

import { ButtonPrimary } from '../stylesComponentsButton';

const UserData = () => {
    const { setUserData, userData, idUser } = useContext(DataAdminContext);
    // const [typeUser, setTypeUser] = useState('');
    // const [userObject, setUserObject] = useState({});

    // const handleChange = (event) => {
    //     setTypeUser(event.target.value);
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;

        setUserData({
            ...userData,
            [name]: value
        });
    };
    const Update = async () => {
        await User.updateUser(idUser, userData);
        window.location.reload();
    };

    return (
        <Container maxwidth="xl">
            <Box sx={{ backgroundColor: 'white', height: '80vh' }} p={2}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h6" color="initial">
                            Datos Personales
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center">
                        <Grid item>
                            <Typography variant="body1" color="initial">
                                Datos guardados
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            onChange={handleInputChange}
                            name="name"
                            defaultValue={userData.name}
                            // value={userCredentials.username}
                            // ref={imputUsername}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            label="Last-Name"
                            variant="outlined"
                            onChange={handleInputChange}
                            name="last_name"
                            defaultValue={userData.last_name}

                            // value="asd"
                            // ref={imputUsername}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            onChange={handleInputChange}
                            name="username"
                            defaultValue={userData.username}

                            // value={userCredentials.username}
                            // ref={imputUsername}
                        />
                    </Grid>

                    <Grid item xs={12} sm={7}>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            label="Dni"
                            variant="outlined"
                            onChange={handleInputChange}
                            name="dni"
                            defaultValue={userData.dni}

                            // value={userCredentials.username}
                            // ref={imputUsername}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={handleInputChange}
                            name="email"
                            defaultValue={userData.email}

                            // value={userCredentials.username}
                            // ref={imputUsername}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <TextField
                            size="small"
                            fullWidth
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            onChange={handleInputChange}
                            name="Password"
                            type="password"
                            defaultValue={userData.email}

                            // value={userCredentials.username}
                            // ref={imputUsername}
                        />
                    </Grid>

                    <Grid item xs={5} sm={7} justifyContent="end">
                        <ButtonPrimary size={'large'} width_full={'100'} onClick={Update}>
                            Guardar
                        </ButtonPrimary>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default UserData;
