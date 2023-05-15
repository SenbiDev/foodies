import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Stack, Typography, Button, Divider, Collapse } from "@mui/material";
import { userLogoutAsync, setUserStatus } from "../../redux/reducers/authSlice";
import { boxContainerComponentStyles } from '../../styles/componentStyles';

function BoxContainer({ title, children, endContent, account = false, divider }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setUserStatus('logout'));
        dispatch(userLogoutAsync());
        navigate('/', { replace: true });
        setTimeout(() => {
            dispatch(setUserStatus(''));
        }, 1800);
    };

    return (
        <Box sx={boxContainerComponentStyles.boxContainer}>
            <Box sx={boxContainerComponentStyles.titleContainer}>
                <Stack alignItems={'center'}>
                    <Typography sx={boxContainerComponentStyles.title}>
                        {title}
                    </Typography>
                    {
                        account &&
                        <Button sx={boxContainerComponentStyles.buttonLogout} onClick={onClick}>
                            Logout
                        </Button>
                    }
                </Stack>
            </Box>
            <Box sx={boxContainerComponentStyles.children}>
                {children}
            </Box>
            {
                account
                ?
                    divider
                    ?
                    <Collapse in={divider} unmountOnExit >
                        {divider && <Divider sx={boxContainerComponentStyles.divider} />}
                        <Box sx={boxContainerComponentStyles.endContent}>
                            {endContent}
                        </Box>
                    </Collapse>
                    :
                    <Box sx={boxContainerComponentStyles.endContent}>
                        {endContent}
                    </Box>
                :
                <Box sx={boxContainerComponentStyles.endContent}>
                    {endContent}
                </Box>
            }
        </Box>
    )
}

export default BoxContainer;