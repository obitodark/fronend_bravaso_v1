import { Grid, Container, Typography } from '@mui/material';
import { useState } from 'react';

import { ViewUserData, ViewListOptionsAccount, ViewCoupons } from '../../components';

const MyAccount = () => {
    const [viewComponent, setViewComponent] = useState([<ViewUserData />, <ViewCoupons />]);
    const [index, setIndex] = useState(0);

    return (
        <div>
            <Container>
                <Grid container spacing={1} mt={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="initial">
                            {' '}
                            Mi Cuenta
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ViewListOptionsAccount setIndex={setIndex} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        {viewComponent[index]}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MyAccount;
