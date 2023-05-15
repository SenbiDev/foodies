import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Box,
    Stack,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
import { selectAddresses, getMyAddressListAsync } from "../../redux/reducers/addressesSlice";
import { addressPanelComponentStyles } from '../../styles/componentStyles';

function AddressPanel({ value, index }) {
    const { myAddressList = [] } = useSelector(selectAddresses);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMyAddressListAsync());
        setTimeout(() => setLoading(false), 1000);
    }, [dispatch])

    return (
        <Box hidden={value !== index}>
        {
            myAddressList.length === 0 && loading === false
                ?
                <Stack alignItems={'center'} useFlexGap gap={'40px'} sx={addressPanelComponentStyles.emptyStateContainer}>
                    <Typography sx={{ fontSize: {} }}>
                        Alamat belum tersedia
                    </Typography>
                </Stack>
                :
                <TableContainer sx={addressPanelComponentStyles.container}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={addressPanelComponentStyles.tableHeadContent1}>Nama</TableCell>
                                <TableCell sx={addressPanelComponentStyles.tableHeadContent2}>Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                myAddressList.map(({ nama, provinsi, kabupaten, kecamatan, kelurahan, detail }, index) => (
                                    <TableRow key={index} sx={addressPanelComponentStyles.tableRow}>
                                        <TableCell sx={addressPanelComponentStyles.tableCell}>
                                            <Typography>
                                                {nama}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={addressPanelComponentStyles.tableCell}>
                                            <Typography>
                                                {provinsi}, {kabupaten}, {kecamatan}, {kelurahan}, {detail}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
        }
        </Box>
    )
}

export default AddressPanel;