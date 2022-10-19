import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
export const DataAdminContext = createContext();

const DataProviderAdmin = ({ children }) => {
    const [idUser, setIdUser] = useState('');
    const [idProduct, setIdProduct] = useState('');
    const [dataWarning, setDataWarning] = useState({
        warning: 'Has superado el limite de stock'
    });
    const [statusDisplay, setStatusDisplay] = useState('none');
    const [dataBrands, setDataBrands] = useState({
        id: null,
        title: '',
        name: '',
        update: true,
        name_button: 'Actulizar',
        description: ''
    });
    const [CategoriesDataUtils, setCategoriesDataUtils] = useState({
        id: null,
        name: '',
        title: 'Update',
        description: '',
        label: 'Categoria',
        update: true,
        categories: true,
        name_buttom: 'Actulizar',
        id_category: null
        // update ->  true actualiza,false crear
        //categories-> true , false  -> subcategories
    });
    // const [adminTitle, setAdminTitle] = useState("Products");
    const [userData, setUserData] = useState({
        name: '',
        last_name: '',
        username: '',
        dni: '',
        email: '',
        status: true
    });

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: 0,
        // image: null,
        stock: 0,
        category_id: 0,
        subcategory_id: 0,
        brand_id: 0,
        source_id: 0,
        status: true
    });
    const [utilsData, setUtilsData] = useState({
        title: '',
        name_buttom: '',
        action: true
    });

    const handleDelete = (funtion) => {
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
                funtion();
                Swal.fire('Se ha Borrado', 'usuario eliminado', 'success');
                window.location.reload();
            }
        });
    };
    return (
        <DataAdminContext.Provider
            value={{
                userData,
                setUserData,
                idUser,
                setIdUser,
                utilsData,
                setUtilsData,
                productData,
                setProductData,
                idProduct,
                setIdProduct,
                CategoriesDataUtils,
                setCategoriesDataUtils,
                handleDelete,
                dataBrands,
                setDataBrands,
                statusDisplay,
                setStatusDisplay
            }}
        >
            {children}
        </DataAdminContext.Provider>
    );
};
export default DataProviderAdmin;
