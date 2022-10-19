import { Grid, Typography } from '@mui/material';

import { DataContext } from '../../Context/DataProvider';
import { useContext } from 'react';

const ListSubCategories = ({ idCategory }) => {
    const styles_list = {
        cursor: 'pointer',
        color: '#787878',
        ':hover': {
            color: '#6a5de3',
            background: 'rgba(0, 0, 0, .03)',
            transition: 'all 0.2s ease-in'
        }
    };

    const { listSubCategory, setFilterByProduct, setFilterBySubCategory, setFilterBySearch } = useContext(DataContext);

    const handleFilter = (list) => {
     
        setFilterByProduct(list);
        setFilterBySubCategory(list);
        setFilterBySearch(list);
        // console.log('lista de  productos', id);
    };
    return (
        <Grid container>
            {listSubCategory
                .filter((list) => list.id_category === idCategory)
                .map((listSubCategory, index) => (
                    <Typography
                        display="block"
                        key={index}
                        p={1}
                        variant="body2"
                        color="initial"
                        sx={styles_list}
                        onClick={() => handleFilter(listSubCategory.products)}
                    >
                        {listSubCategory.name}
                    </Typography>
                ))}
        </Grid>
    );
};
export default ListSubCategories;
