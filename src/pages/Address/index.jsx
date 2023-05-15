import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Stack,
    Typography,
    Skeleton,
    FormControlLabel,
    RadioGroup,
    Radio,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
import { BoxContainer, BackwardFordward } from '../../components';
import { selectAddresses, getMyAddressListAsync } from "../../redux/reducers/addressesSlice";
import { selectOrderItem, getOrderItem, putOrderItem } from "../../redux/reducers/orderItemSlice";
import { addressPageStyles } from '../../styles/pageStyles';

function Address() {
    const { myAddressList = [] } = useSelector(selectAddresses);
    const { orderItem = {} } = useSelector(selectOrderItem);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [radio, setRadio] = useState('');
    const radioComponent = useRef();

    useEffect(() => {
        dispatch(getMyAddressListAsync());
        setTimeout(() => setLoading(false), 2000);
        setTimeout(() => radioComponent.current.click(), 3000);
        dispatch(getOrderItem())
    }, [dispatch]);

    const onRadioSelected = (e) => {
        setRadio(e.target.value);
        const radioSelected = myAddressList.filter((address) => address.nama === e.target.value)[0];
        const { _id, nama, provinsi, kabupaten, kecamatan, kelurahan, detail } = radioSelected;
        const { subtotal } = orderItem;
        dispatch(putOrderItem({ subtotal, _id, nama, provinsi, kabupaten, kecamatan, kelurahan, detail }));
    }

    return (
        <BoxContainer title={'Alamat'} endContent={<BackwardFordward to={'/checkout'} />}>
            <Stack alignItems={{ xs: 'center', sm: 'flex-start' }} sx={addressPageStyles.descriptionContainer}>
                <Typography sx={addressPageStyles.descriptionContent}>
                    Pilih Alamat Pengiriman
                </Typography>
            </Stack>
            <RadioGroup
                name="controlled-radio-buttons-group"
                value={radio}
                onChange={onRadioSelected}
            >
                {
                    myAddressList.length === 0 && loading === false
                        ?
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Typography>
                                Alamat belum tersedia
                            </Typography>
                        </Stack>
                        :
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={addressPageStyles.tableHeadContent1}>
                                            {
                                                loading
                                                    ?
                                                    <Skeleton sx={{ width: { xs: '13.95px' }, height: '24px' }} />
                                                    :
                                                    <Typography sx={addressPageStyles.tableContent}>
                                                        #
                                                    </Typography>
                                            }
                                        </TableCell>
                                        <TableCell sx={addressPageStyles.tableHeadContent2}>
                                            {
                                                loading
                                                    ?
                                                    <Skeleton sx={{ width: { xs: '49.86px' }, height: '24px' }} />
                                                    :
                                                    <Typography sx={addressPageStyles.tableContent}>
                                                        Nama
                                                    </Typography>
                                            }
                                        </TableCell>
                                        <TableCell sx={addressPageStyles.tableHeadContent3}>
                                            {
                                                loading
                                                    ?
                                                    <Skeleton sx={{ width: { xs: '233.19px' }, height: '24px' }} />
                                                    :
                                                    <Typography sx={addressPageStyles.tableContent}>
                                                        Detail
                                                    </Typography>
                                            }
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        myAddressList.map(({ nama, provinsi, kabupaten, kecamatan, kelurahan, detail }, index) => (
                                            <TableRow key={index} sx={addressPageStyles.tableRowContainer}>
                                                <TableCell sx={addressPageStyles.tableCell}>
                                                    {
                                                        loading
                                                            ?
                                                            <Skeleton variant="circular" sx={{ width: { xs: '20px' }, height: '20px' }} />
                                                            :
                                                            <FormControlLabel value={nama} control={<Radio ref={index === 0 ? radioComponent : {}} size='small' sx={addressPageStyles.radio} />} />
                                                    }
                                                </TableCell>
                                                <TableCell sx={[addressPageStyles.tableCell, { paddingRight: loading ? '46px' : 0 }]}>
                                                    {
                                                        loading
                                                            ?
                                                            <Skeleton sx={{ width: { xs: '49.86', md: '230px' }, height: '24px' }} />
                                                            :
                                                            <Typography sx={addressPageStyles.tableContent}>
                                                                {nama}
                                                            </Typography>
                                                    }
                                                </TableCell>
                                                <TableCell sx={addressPageStyles.tableCell}>
                                                    {
                                                        loading
                                                            ?
                                                            <Skeleton sx={{ width: { xs: '233px', md: '430px' }, height: '24px' }} />
                                                            :
                                                            <Typography >
                                                                {provinsi}, {kabupaten}, {kecamatan}, {kelurahan}, {detail}
                                                            </Typography>
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                }
            </RadioGroup>
        </BoxContainer>
    );
}

export default Address;