import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack, Typography, Button, IconButton } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import TextField from '../TextField';
import { selectAuth, setUserStatus, userLoginAsync } from '../../redux/reducers/authSlice';
import useInput from '../../hooks/useInput';
import { loginFormComponentStyles } from '../../styles/componentStyles';

function LoginForm({ onHideLoginDialog }) {
    const { token }   = useSelector(selectAuth);
    const dispatch = useDispatch();
    const [inputs, setInputs] = useInput({ email: '', password: ''});

    const onSubmit = () => {
        dispatch(userLoginAsync(inputs));
        onHideLoginDialog();

        setTimeout(() => {
            if (token === null || token === 'undefined' || token === undefined) {
                dispatch(setUserStatus('login failed'));
            }

            setTimeout(() => dispatch(setUserStatus('')), 4000);
        } ,2000);
    };

    return (
        <Box sx={loginFormComponentStyles.boxContainer}>
            <Stack alignItems={'center'} useFlexGap gap={'50px'}>
                <Stack direction={'row'} justifyContent={'space-between'} sx={loginFormComponentStyles.titleContainer}>
                    <div style={{ width: '24px' }} />

                    <Typography sx={loginFormComponentStyles.title}>
                        Login
                    </Typography>

                    <Box>
                        <IconButton sx={loginFormComponentStyles.iconButton} onClick={onHideLoginDialog}>
                            <CancelRoundedIcon sx={loginFormComponentStyles.closeIcon} />
                        </IconButton>
                    </Box>
                </Stack>

                <Stack useFlexGap gap={'35px'} sx={loginFormComponentStyles.formContainer}>
                    <TextField inputs={inputs} name={'email'} label={'Email'} onInputsChange={setInputs} />
                    <TextField inputs={inputs} name={'password'} label={'Password'} type='password' onInputsChange={setInputs} />
                </Stack>

                <Stack alignItems={{ xs: 'center', sm: 'flex-end' }} sx={loginFormComponentStyles.loginButtonContainer}>
                    <Button variant='contained' sx={loginFormComponentStyles.loginButton} onClick={onSubmit}>
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default LoginForm;