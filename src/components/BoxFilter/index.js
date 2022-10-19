import { Grid, Container, Select, MenuItem, InputLabel, FormControl, TextField, InputAdornment, Button } from '@mui/material';
import { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { DataContext } from '../../Context/DataProvider';
const BoxFilter = () => {
    let order = null;
    const { setOpenBoxCategories, filterBySearch, filterBySubCategory, setFilterByProduct, filterByProduct } = useContext(DataContext);

    const handleChange = (e) => {
        setAge(e.target.value);
        if (e.target.value === 'All') return setFilterByProduct(filterBySubCategory);
        const filtro = filterBySubCategory.filter((data) => data.brand.name === e.target.value);

        setFilterByProduct(filtro);
    };
    const handlechangePrice = async (event) => {
        setName(event.target.value);
        // const { value } = event.target;
        if (event.target.value === 'menor') {
            order = filterByProduct.sort((a, b) => a.price - b.price);
            await setFilterByProduct([]);
        }
        if (event.target.value === 'mayor') {
            order = filterByProduct.sort((a, b) => b.price - a.price);
            await setFilterByProduct([]);
        }

        await setFilterByProduct(order);
    };
    const [age, setAge] = useState('');
    const [name, setName] = useState('');

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    const handleChangeInput = async (e) => {
        const filtro = filterBySearch.filter((listUser) => listUser.name.toLowerCase().includes(e.target.value.toLowerCase()));
        await setFilterByProduct(filtro);
    };
    return (
        <Container sx={{ background: ' #eeeeee', borderRadius: '5px', border: '1px rgba(0, 0, 0, .2) solid ' }}>
            <Grid container justifyContent="space-between" p={2} direction="row">
                <Grid item container xs={12} sm={12} lg={6} sx={{ justifyContent: { sm: 'center', lg: 'start' } }}>
                    <Grid item xs={12} sm={10} mb={1}>
                        <TextField
                            id="outlined-basic"
                            label="Search"
                            size="small"
                            variant="outlined"
                            fullWidth
                            onChange={handleChangeInput}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    lg={6}
                    sx={{ justifyContent: { xs: 'center', sm: 'center', lg: 'end' } }}
                    spacing={1}
                    justifyContent="end"
                >
                    <Grid item minWidth={180}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Brands</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // name={age}
                                // defaultValue="ALL"
                                value={age}
                                label="Ordenar por"
                                onChange={handleChange}
                            >
                                <MenuItem value={'All'}>All</MenuItem>
                                {filterBySubCategory
                                    .map((list) => list.brand.name)
                                    .filter(onlyUnique)
                                    .map((list, index) => (
                                        <MenuItem key={index} value={list}>
                                            {list}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item minWidth={200}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={name}
                                label="Ordenar por"
                                onChange={handlechangePrice}
                            >
                                <MenuItem value="menor">Menor a Mayor</MenuItem>
                                <MenuItem value="mayor">Mayor a Menor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" sx={{ display: { sm: 'block', lg: 'none' } }} onClick={() => setOpenBoxCategories(true)}>
                            Filtro
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BoxFilter;
