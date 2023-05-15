import { Snackbar as MuiSnackbar, Stack, Typography } from "@mui/material";
import SlideTransition from "../SlideTransition";

function Snackbar({ open, backgroundColor, icon, message }) {
    return (
        <MuiSnackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            TransitionComponent={SlideTransition}
        >
            <Stack useFlexGap gap={'10px'} sx={{ alignItems: 'center', padding: '30px', backgroundColor: backgroundColor, boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.29)', borderRadius: '30px' }}>
                {icon}

                <Typography sx={{ color: 'white', fontWeight: 600, fontSize: { md: '14px', lg: '16px' } }}>
                    {message}
                </Typography>
            </Stack>
        </MuiSnackbar>
    )
}

export default Snackbar;