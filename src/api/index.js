const BASE_URL = 'https://eduwork-server-production.up.railway.app';

function getAccessToken() {
    return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
}

function deleteAccessToken() {
    localStorage.removeItem('accessToken');
}

function getUserCreatedTemp() {
    return JSON.parse(localStorage.getItem('userCreatedTemp'));
}

function putUserCreatedTemp(userCreatedTemp) {
    return localStorage.setItem('userCreatedTemp', JSON.stringify(userCreatedTemp));
}

function deleteUserCreatedTemp() {
    localStorage.removeItem('userCreatedTemp');
}

function getOrderItemTemp() {
    return JSON.parse(localStorage.getItem('orderItemTemp'));
}

function putOrderItemTemp(orderItemTemp) {
    return localStorage.setItem('orderItemTemp', JSON.stringify(orderItemTemp));
}

function deleteOrderItemTemp() {
    localStorage.removeItem('orderItemTemp');
}

function getAddressCreatedTemp() {
    return JSON.parse(localStorage.getItem('addressCreatedTemp'));
}

function putAddressCreatedTemp(addressCreatedTemp) {
    return localStorage.setItem('addressCreatedTemp', JSON.stringify(addressCreatedTemp));
}

function deleteAddressCreatedTemp() {
    localStorage.removeItem('addressCreatedTemp');
}

function getOrderIdTemp() {
    return localStorage.getItem('orderIdTemp');
}

function putOrderIdTemp(orderIdTemp) {
    return localStorage.setItem('orderIdTemp', orderIdTemp);
}

function deleteOrderIdTemp() {
    localStorage.removeItem('orderIdTemp');
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
}

async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    putAccessToken(responseJson.token)

    return responseJson.token;
}

async function register({ full_name, email, password }) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name, email, password }),
    });

    const responseJson = await response.json();
    putUserCreatedTemp(responseJson);
}

async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/auth/me`);
    const responseJson = await response.json();

    return responseJson;
}

async function logout() {
    await fetchWithToken(`${BASE_URL}/auth/logout`, {
        method: 'POST'
    });

    deleteAccessToken()
}

async function getProducts({ query = '', page = 1, category = '', tags = '' }) {
    const response = await fetch(`${BASE_URL}/api/products?q=${query}&page=${page}&category=${category}${tags}`);

    const responseJson = await response.json();
    const { data, totalPages, currentPage } = responseJson;
    
    return { data, totalPages, currentPage };
}

async function getTags() {
    const response = await fetch(`${BASE_URL}/api/tags`);
    const responseJson = await response.json();

    return responseJson;
}

async function getCategories() {
    const response = await fetch(`${BASE_URL}/api/categories`);
    const responseJson = await response.json();

    return responseJson;
}

async function getProvinceList() {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`);
    const responseJson = await response.json();

    return responseJson;
}

async function getRegencyList({ provinceId = '11' }) {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
    const responseJson = await response.json();

    return responseJson;
}

async function getDistrictList({ regencyId = '1101' }) {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`);
    const responseJson = await response.json();

    return responseJson;
}

async function getVillageList({ districtId = '1101010' }) {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`);
    const responseJson = await response.json();

    return responseJson;
}

async function createAddress({ nama, provinsi, kabupaten, kecamatan, kelurahan, detail }) {
    const response = await fetchWithToken(`${BASE_URL}/api/delivery-addresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, provinsi, kabupaten, kecamatan, kelurahan, detail }),
    });

    const responseJson = await response.json();
    putAddressCreatedTemp(responseJson);
}

async function getMyAddressList() {
    const response = await fetchWithToken(`${BASE_URL}/api/delivery-addresses`);

    const responseJson = await response.json();

    return responseJson.data;
}

async function getCarts() {
    const response = await fetchWithToken(`${BASE_URL}/api/carts`);

    const responseJson = await response.json();

    return responseJson;
}

async function updateCartItems({ items }) {
    await fetchWithToken(`${BASE_URL}/api/carts`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
    });
}

async function createOrder({ delivery_fee, delivery_address }) {
    const response = await fetchWithToken(`${BASE_URL}/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ delivery_fee, delivery_address }),
    });

    const responseJson = await response.json();

    return responseJson._id;
}

async function getOrderList() {
    const response = await fetchWithToken(`${BASE_URL}/api/orders`);

    const responseJson = await response.json();

    return responseJson.data;
}

async function getInvoiceById({ order_id }) {
    const response = await fetchWithToken(`${BASE_URL}/api/invoices/${order_id}`);

    const responseJson = await response.json();

    return responseJson;
}

export {
    getAccessToken,
    putAccessToken,
    getUserCreatedTemp,
    putUserCreatedTemp,
    deleteUserCreatedTemp,
    getOrderItemTemp,
    putOrderItemTemp,
    deleteOrderItemTemp,
    getAddressCreatedTemp,
    putAddressCreatedTemp,
    deleteAddressCreatedTemp,
    getOrderIdTemp,
    putOrderIdTemp,
    deleteOrderIdTemp,
    login,
    register,
    getUserLogged,
    logout,
    getProducts,
    getTags,
    getCategories,
    getProvinceList,
    getRegencyList,
    getDistrictList,
    getVillageList,
    createAddress,
    getMyAddressList,
    getCarts,
    updateCartItems,
    createOrder,
    getOrderList,
    getInvoiceById
};