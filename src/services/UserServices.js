import { API_URL } from '../api';

// const token = localStorage.getItem('token');

const listUser = async () => {
    const response = await fetch(`${API_URL}/users`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    const { results } = await response.json();

    return results;
};

const updateUser = async (id, data) => {
    // console.log('datos a actulizar', data);
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    });
    const datas = await response.json();

    return datas;
};
const validateUsername = async (username) => {
    // console.log('datos a actulizar', data);
    const response = await fetch(`${API_URL}/users/username/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // console.log('validate username', await response.json());
    // console.log('validate username', await response.status);
    return await response.status;
};
const validateEmail = async (email) => {
    // console.log('datos a actulizar', data);
    const response = await fetch(`${API_URL}/users/email/${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // console.log('validate username', await response.json());
    // console.log('validate username', await response.status);
    return await response.status;
};

const createUser = async (data) => {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const datas = await response.json();
    return datas;
};

const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    const datas = await response.json();

    return datas;
};

const getUserById = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    const data = await response.json();

    return data;
};

// export const getUser = async (id) => {
//     const response = await fetch(`${API_URL}/auth/signin`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(id)
//     });
//     const data = await response.json();

//     return { data };
// };

// export const SignUp = async (user) => {
//     const response = await fetch(`${API_URL}/auth/signup`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     });
//     const data = await response.json();
//     return data;
// };

// export const isAuth = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//         return false;
//     }
//     const payload = token.split('.')[1];
//     const jsonPayload = JSON.parse(window.atob(payload));

//     if (jsonPayload.exp > new Date() / 1000) {
//         console.log(jsonPayload);
//         return true;
//     }

//     return false;
//     // const token = window.localStorage.getItem("token");
//     // if (!token) {
//     //   return false;
//     // }
//     // const payload = token.split(".")[1];
//     // const jsonPayload = JSON.parse(window.atob(payload));
//     // if (jsonPayload.exp > new Date() / 1000) {
//     //   return true;
//     // }
// };

// export const SignOut = () => {
//     window.localStorage.removeItem('token');
//     return (window.location.href = '/pe');
//     //refreca el la pagina
// };

const User = {
    listUser,
    updateUser,
    getUserById,
    createUser,
    deleteUser,
    validateUsername,
    validateEmail
};
export default User;
