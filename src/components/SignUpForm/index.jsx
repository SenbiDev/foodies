import { useDispatch } from 'react-redux';
import { Box, Stack, Typography, Button, IconButton } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import TextField from '../TextField';
import { userRegisterAsync, setUserStatus } from '../../redux/reducers/authSlice';
import useInput from '../../hooks/useInput';
import { signUpFormComponentStyles } from '../../styles/componentStyles';
import { deleteUserCreatedTemp, getUserCreatedTemp } from '../../api';

function SignUpForm({ onHideSignUpDialog }) {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useInput({ full_name: '', email: '', password: ''});

    const onSubmit = () => {
        dispatch(userRegisterAsync(inputs));
        onHideSignUpDialog();

        setTimeout(() => {
            if (('error') in getUserCreatedTemp()) {
                dispatch(setUserStatus('register failed'));
            } else {
                dispatch(setUserStatus('register success'));
            }

            setTimeout(() => {
                deleteUserCreatedTemp();

                setTimeout(() => dispatch(setUserStatus('')), 3000);
            }, 500);
        }, 1000);
    };

    return (
        <Box sx={signUpFormComponentStyles.boxContainer}>
            <Stack alignItems={'center'} useFlexGap gap={'50px'}>
                <Stack direction={'row'} justifyContent={'space-between'} sx={signUpFormComponentStyles.titleContainer}>
                    <div style={{ width: '24px' }} />

                    <Typography sx={signUpFormComponentStyles.title}>
                        Sign up
                    </Typography>

                    <Box>
                        <IconButton sx={signUpFormComponentStyles.iconButton} onClick={onHideSignUpDialog}>
                            <CancelRoundedIcon sx={signUpFormComponentStyles.closeIcon} />
                        </IconButton>
                    </Box>
                </Stack>

                <Stack useFlexGap gap={'35px'} sx={signUpFormComponentStyles.formContainer}>
                    <TextField inputs={inputs} name={'full_name'} label={'Nama Lengkap'} onInputsChange={setInputs} />
                    <TextField inputs={inputs} name={'email'} label={'Email'} onInputsChange={setInputs} />
                    <TextField inputs={inputs} name={'password'} label={'Password'} type='password' onInputsChange={setInputs} />
                </Stack>

                <Stack alignItems={{ xs: 'center', sm: 'flex-end' }} sx={signUpFormComponentStyles.signUpButtonContainer}>
                    <Button variant='contained' sx={signUpFormComponentStyles.signUpButton} onClick={onSubmit}>
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SignUpForm;