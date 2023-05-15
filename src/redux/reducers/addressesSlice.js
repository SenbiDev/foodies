import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getProvinceList,
    getRegencyList,
    getDistrictList,
    getVillageList,
    createAddress,
    getMyAddressList,
} from '../../api'
import capitalize from "capitalize";

const initialState = {
    provinceList: [],
    addressCreationStatus: '',
    provinceId: '11',
    provinceName: 'Aceh',
    regencyList: [],
    regencyId: '1101',
    regencyName: 'Kabupaten Simeulue',
    districtList: [],
    districtId: '1101010',
    districtName: 'Teupah Selatan',
    villageList: [],
    villageName: 'Latiung',
    myAddressList: [],
    status: 'loading'
};

export const getProvinceListAsync = createAsyncThunk(
    'getProvinceList',
    async () => {
        let provinceList = await getProvinceList();
        provinceList = provinceList.map((province) => ({ ...province, name: capitalize.words(province.name) }))
        return provinceList;
    }
);

export const getRegencyListAsync = createAsyncThunk(
    'getRegencyList',
    async ({ provinceId }) => {
        let regencyList = await getRegencyList({ provinceId });
        regencyList = regencyList.map((regency) => ({ ...regency, name: capitalize.words(regency.name) }))
        return regencyList;
    }
);

export const getDistrictListAsync = createAsyncThunk(
    'getDistrictList',
    async ({ regencyId }) => {
        let districtList = await getDistrictList({ regencyId });
        districtList = districtList.map((district) => ({ ...district, name: capitalize.words(district.name) }))
        return districtList;
    }
);

export const getVillageListAsync = createAsyncThunk(
    'getVillageList',
    async ({ districtId }) => {
        let villageList = await getVillageList({ districtId });
        villageList = villageList.map((village) => ({ ...village, name: capitalize.words(village.name) }))
        return villageList;
    }
);

export const createAddressAsync = createAsyncThunk(
    'createAddress',
    async ({ nama, provinsi, kabupaten, kecamatan, kelurahan, detail }) => {
        await createAddress({ nama, provinsi, kabupaten, kecamatan, kelurahan, detail });
    }
);

export const getMyAddressListAsync = createAsyncThunk(
    'getMyAddressList',
    async () => {
        const myAddressList = await getMyAddressList();
        return myAddressList;
    }
);

const addressesSlice = createSlice({
    name: 'addresses',
    initialState,
    reducers: {
        setAddressCreationStatus: (state, action) => {
            state.addressCreationStatus = action.payload;
        },
        updateProvinceId: (state, action) => {
            state.provinceId = action.payload;
        },
        updateRegencyId: (state, action) => {
            state.regencyId = action.payload;
        },
        updateDistrictId: (state, action) => {
            state.districtId = action.payload;
        },
        updateProvinceName: (state, action) => {
            state.provinceName = action.payload;
        },
        updateRegencyName: (state, action) => {
            state.regencyName = action.payload;
        },
        updateDistrictName: (state, action) => {
            state.districtName = action.payload;
        },
        updateVillageName: (state, action) => {
            state.villageName = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProvinceListAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProvinceListAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.provinceList = action.payload;
            })
            .addCase(getProvinceListAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(getRegencyListAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getRegencyListAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.regencyList = action.payload;
            })
            .addCase(getRegencyListAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(getDistrictListAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getDistrictListAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.districtList = action.payload;
            })
            .addCase(getDistrictListAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(getVillageListAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVillageListAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.villageList = action.payload;
            })
            .addCase(getVillageListAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(createAddressAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createAddressAsync.fulfilled, (state) => {
                state.status = 'idle';
            })
            .addCase(createAddressAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(getMyAddressListAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMyAddressListAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.myAddressList = action.payload;
            })
            .addCase(getMyAddressListAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const {
    setAddressCreationStatus,
    updateProvinceId,
    updateRegencyId,
    updateDistrictId,
    updateProvinceName,
    updateRegencyName,
    updateDistrictName,
    updateVillageName
} = addressesSlice.actions;

export const selectAddresses = (state) => state.addresses;

export default addressesSlice.reducer;