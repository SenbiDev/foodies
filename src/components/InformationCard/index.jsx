import { Box, Stack, Typography } from "@mui/material";
import { informationCardComponentStyles } from '../../styles/componentStyles';

function InformationCard({ icon, centerContent, endContent }) {
    return (
        <Box sx={informationCardComponentStyles.container}>
            <Stack useFlexGap gap={{ xs: '10px', md: '20px' }} alignItems={'center'} justifyContent={'space-between'} sx={informationCardComponentStyles.contentContainer}>
                {icon}
                <Typography sx={informationCardComponentStyles.centerContent}>
                    {centerContent}
                </Typography>
                <Typography sx={informationCardComponentStyles.endContent}>
                    {endContent}
                </Typography>
            </Stack>
        </Box>
    )
}

export default InformationCard;