import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Skeleton,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
import { selectAuth, currentUserAsync } from "../../redux/reducers/authSlice";
import { profileComponentStyles } from '../../styles/componentStyles';

function ProfilePanel({ value, index }) {
    const { me } = useSelector(selectAuth);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(currentUserAsync());
        setTimeout(() => setLoading(false), 1000);
    }, [dispatch]);

    return (
        <TableContainer hidden={value !== index}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={profileComponentStyles.tableHeadContent1}></TableCell>
                        <TableCell sx={profileComponentStyles.tableHeadContent2}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        ("_id") in me && loading === false
                            ?
                            <>
                                <TableRow sx={profileComponentStyles.tableRow}>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Typography>
                                            Nama
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Typography>
                                            { me.full_name }
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={profileComponentStyles.tableRow}>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Typography>
                                            Email
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Typography sx={{ wordBreak: 'break-all' }}>
                                            { me.email }
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </>
                            :
                            <>
                                <TableRow sx={profileComponentStyles.tableRow}>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Skeleton animation='wave' sx={{ width: { xs: '80px', sm: '90px', md: '240px', lg: '340px', xl: '440px' }, height: '24px' }} />
                                    </TableCell>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Skeleton animation='wave' sx={{ width: { xs: '106px', sm: '206px', md: '300px', lg: '440px', xl: '540px' }, height: '24px' }} />
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={profileComponentStyles.tableRow}>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Skeleton animation='wave' sx={{ width: { xs: '80px', sm: '90px', md: '240px', lg: '340px', xl: '440px' }, height: '24px' }} />
                                    </TableCell>
                                    <TableCell sx={profileComponentStyles.tableCell}>
                                        <Skeleton animation='wave' sx={{ width: { xs: '106px', sm: '206px', md: '300px', lg: '440px', xl: '540px' }, height: '24px' }} />
                                    </TableCell>
                                </TableRow>
                            </>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProfilePanel;