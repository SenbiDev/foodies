import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Typography, Button } from "@mui/material";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import TextField from "../TextField";
import {
    selectAddresses,
    getProvinceListAsync,
    getRegencyListAsync,
    getDistrictListAsync,
    getVillageListAsync,
    setAddressCreationStatus,
    updateProvinceId,
    updateRegencyId,
    updateDistrictId,
    updateProvinceName,
    updateRegencyName,
    updateDistrictName,
    updateVillageName,
    createAddressAsync,
    getMyAddressListAsync
} from "../../redux/reducers/addressesSlice";
import useInput from "../../hooks/useInput";
import { addressFormComponentStyles } from '../../styles/componentStyles';
import { getAddressCreatedTemp, deleteAddressCreatedTemp } from "../../api";

function AddressForm() {
    const {
        provinceList,
        regencyList,
        districtList,
        villageList,
        provinceId,
        regencyId,
        districtId,
        provinceName,
        regencyName,
        districtName,
        villageName
    } = useSelector(selectAddresses);
    const dispatch = useDispatch();
    const [inputs, setInputs] = useInput({ nama: '', detail: ''});

    useEffect(() => {
        dispatch(getProvinceListAsync());
        dispatch(getRegencyListAsync({ provinceId }));
        dispatch(getDistrictListAsync({ regencyId }));
        dispatch(getVillageListAsync({ districtId }));
    }, [dispatch, provinceId, regencyId, districtId]);

    const onUpdateProvince = (provinceId, provinceName) => {
        dispatch(updateProvinceId(provinceId));
        dispatch(updateProvinceName(provinceName));
    };

    const onUpdateRegency = (regencyId, regencyName) => {
        dispatch(updateRegencyId(regencyId));
        dispatch(updateRegencyName(regencyName));
    };

    const onUpdateDistrict = (districtId, districtName) => {
        dispatch(updateDistrictId(districtId));
        dispatch(updateDistrictName(districtName));
    };
    
    const onUpdateVillage = (_, villageName) => {
        dispatch(updateVillageName(villageName));
    };

    const onSubmit = () => {
        dispatch(createAddressAsync({
            nama: inputs.nama,
            provinsi: provinceName,
            kabupaten: regencyName,
            kecamatan: districtName,
            kelurahan: villageName,
            detail: inputs.detail
        }));
        setTimeout(() => {
            if (('user') in getAddressCreatedTemp()) {
                dispatch(setAddressCreationStatus('success'));
            } else {
                dispatch(setAddressCreationStatus('failed'));
            }

            setTimeout(() => {
                dispatch(setAddressCreationStatus(''));
                deleteAddressCreatedTemp();
                dispatch(getMyAddressListAsync());
            }, 3000);
        }, 1000);
        window.scrollTo(0, 0);
    }

    return (
        <Stack useFlexGap gap={'35px'} sx={addressFormComponentStyles.container}>
            <Stack alignItems={addressFormComponentStyles.infoContainer}>
                <Typography>
                    Tambah Alamat
                </Typography>
            </Stack>

            <Stack useFlexGap gap={'35px'}>
                <TextField inputs={inputs} name={'nama'} label={'Nama'} onInputsChange={setInputs} />
                <Dropdown label={'Provinsi'} initialValue={{ id: '11', name: 'Aceh' }} data={provinceList} onUpdate={onUpdateProvince} />
                <Dropdown label={'Kabupaten'} initialValue={{ id: '1101', name: 'Kabupaten Simeulue' }} data={regencyList} onUpdate={onUpdateRegency} />
                <Dropdown label={'Kecamatan'} initialValue={{ id: '1101010', name: 'Teupah Selatan' }} data={districtList} onUpdate={onUpdateDistrict} />
                <Dropdown label={'Kelurahan'} initialValue={{ id: '1101010001', name: 'Latiung' }} data={villageList} onUpdate={onUpdateVillage} />
                <TextArea inputs={inputs} name={'detail'} onInputsChange={setInputs} />
            </Stack>

            <Stack direction={'row'} justifyContent={'flex-end'}>
                <Button variant='contained' sx={addressFormComponentStyles.addButton} onClick={onSubmit}>
                    Tambah
                </Button>
            </Stack>
        </Stack>
    );
}

export default AddressForm;