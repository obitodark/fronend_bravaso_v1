import { createContext, useState, useEffect } from 'react';
import StoreApi from '../services';

/*------------------------*/
import Brand from '../services/BrandsServices';
import Category from '../services/categoryServices';
import Products from '../services/ProductsServices';
import SubCategory from '../services/SubcategoryServices';

/*-----------------------------*/
export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [openModalLogin, setOpenModalLogin] = useState(false);
    const [idProduct, setIdProduct] = useState(0);
    /*------------------------------------------ */
    const [listProduct, setListProduct] = useState([]);
    const [filterProduct, setFiltertProduct] = useState([]);
    const [listBrands, setListBrands] = useState([]);
    const [filterBrands, setFilterBrands] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [listSubCategory, setListSubCategory] = useState([]);
    const [filterByProduct, setFilterByProduct] = useState([]);
    const [bandera, setBandera] = useState(false);
    const [filterBySubCategory, setFilterBySubCategory] = useState([]);
    const [filterBySearch, setFilterBySearch] = useState([]);
    /*********************************** */
    const getListProduct = async () => {
        const response = await Products.listProduct();
        setListProduct(response);
        setFiltertProduct(response);
        setFilterByProduct(response);
        setFilterBySearch(response);
    };

    const getListCategory = async () => {
        const response = await Category.listCategory();
        setListCategory(response);
        console.log('categories', response);
    };
    const getSubCategory = async () => {
        const response = await SubCategory.listSubCategory();
        setListSubCategory(response);
    };
    const getListBrand = async () => {
        const response = await Brand.listBrand();
        setListBrands(response);
        setFilterBrands(response);
    };
    /*********************************** */

    useEffect(() => {
        getListProduct();
    }, []);

    useEffect(() => {
        getListBrand();
    }, []);

    useEffect(() => {
        getSubCategory();
    }, []);
    useEffect(() => {
        getListCategory();
    }, []);
    return (
        <DataContext.Provider
            value={{
                setIdProduct,
                idProduct,

                openModalLogin,
                setOpenModalLogin,
                // asdasdasaasdasd
                listProduct,
                setListProduct,
                filterProduct,
                setFiltertProduct,
                listBrands,
                setListBrands,
                listCategory,
                setListCategory,
                listSubCategory,
                setListSubCategory,
                filterBrands,
                setFilterBrands,
                bandera,
                setBandera,
                filterByProduct,
                setFilterByProduct,
                filterBySubCategory,
                setFilterBySubCategory,
                filterBySearch,
                setFilterBySearch
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
