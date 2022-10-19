import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataProvider';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useRef } from 'react';
// import './css.css';
const styles_card = {
    width: '50px',
    height: '60px',
    border: '1px solid #D4D4D4',
    borderRadius: '7px',
    ':hover': {
        border: '2px #6a5de3 solid ',
        // boxShadow: '4px 4px 5px #bfbfbf',
        transition: 'all 0.2s ease-in'
    }
};

const styles_image = {
    transition: 'all 0.5s ease-in'
};

const ImageScreenSmall = ({ listProducts, idProduct }) => {
    return (
        <Carousel>
            {listProducts.length > 0 &&
                listProducts[idProduct].image.map((data, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={data} alt="Third slide" />
                    </Carousel.Item>
                ))}
        </Carousel>
    );
};

const ImageScreenBig = ({ dataProduct }) => {
    // const imgRef = useRef();
    // const handelMouseMove = (e) => {
    //     const clientX = e.clientX - e.target.offsetLeft;
    //     const clientY = e.clientY - e.target.offsetTop;
    //     imgRef.style.transformOrigin = `${clientX}px  ${clientY}px`;
    //     imgRef.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2)';
    //     console.log('move', clientX);
    // };
    return (
        <Card variant="outlined" sx={{ position: 'relative', paddingBottom: '100px', border: 'none' }}>
            <Grid>
                <CardMedia
                    sx={{ width: '80%' }}
                    component="img"
                    // width="100px"
                    // height="100%"
                    image={dataProduct.image}
                    // alt={`${listProduct.length > 0 && listProduct.name}`}
                />
            </Grid>
            {/* <figure id="magnifying_area" sx={styles_image} onMouseMove={handelMouseMove}>
                <img id="magnifying_img" src={dataProduct.image} width="500px" ref={imgRef} />
            </figure> */}

            <Grid container elevation={0} justifyContent="center" sx={{ position: 'absolute', top: '85%', left: 5, width: '95%' }}>
                <Grid container item xs={12} justifyContent="center">
                    <Grid item xs={1.5} mx={1}>
                        <Button sx={styles_card} size="small">
                            <img width="100%" height="100%" src={dataProduct.image} alt="" sx={{ border: '10px solid black' }} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

const DetailsImages = ({ dataProduct }) => {
    // const handleResize = () => {
    //     setWidth(window.innerWidth);
    // };
    // const [width, setWidth] = useState(window.innerWidth);
    // const { listProduct, idProduct } = useContext(DataContext);
    // const [indexImage, setIndexImage] = useState(0);
    // const [image, setImage] = useState('');
    // window.addEventListener('resize', handleResize);
    // const getImage = () => {
    //     const product = listProduct.filter((data) => data.id === idProduct);
    //     setImage(product[0].image);
    //     console.log('image', product[0].image);
    // };
    // useEffect(() => {
    //     getImage();
    // }, []);

    return (
        <div>
            {/* {getImage()} */}

            <ImageScreenBig dataProduct={dataProduct} />
            {/* {width >= 1200 ? (
                <ImageScreenBig
                    idProduct={idProduct - 1}
                    listProducts={listProducts}
                    setIndexImage={setIndexImage}
                    indexImage={indexImage}
                />
            ) : (
                <ImageScreenSmall listProducts={listProducts} idProduct={idProduct - 1} />
            )} */}
        </div>
    );
};
export default DetailsImages;

{
    /* <Grid container elevation={0} justifyContent="center" sx={{ position: 'absolute', top: '85%', left: 5, width: '95%' }}>
                <Grid container item xs={12} justifyContent="center">
                    {listProducts.length > 0 &&
                        listProducts[idProduct].image.map((data, index) => (
                            <Grid item xs={1.5} key={index} mx={1}>
                                <Button sx={styles_card} size="small" onClick={() => setIndexImage(index)}>
                                    <img width="100%" height="100%" src={data} alt="" sx={{ border: '10px solid black' }} />
                                </Button>
                            </Grid>
                        ))}
                </Grid>
            </Grid> */
}
