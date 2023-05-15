import { Stack, Box, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Image } from '../../components';
import formatToCurrency from "../../utils/formatToCurrency";
import { foodItemComponentStyles } from '../../styles/componentStyles';

function FoodItem({ image, name, price }) {
    return (
        <Stack direction={'row'} justifyContent={'flex-end'} sx={foodItemComponentStyles.stackContainer}>
            <Box sx={foodItemComponentStyles.boxContainer}>
                <Image type='food-item-image' src={image} />

                <Stack useFlexGap gap={{ xs: '20px', sm: '44px' }}>

                    <Stack useFlexGap gap={{ xs: '2px', lg: '16px' }} alignItems={'flex-end'} sx={foodItemComponentStyles.productInformationContainer}>
                        <Typography sx={foodItemComponentStyles.productName}>
                            {name}
                        </Typography>

                        <Stack direction={'row'}>
                            <StarRoundedIcon sx={foodItemComponentStyles.star} />
                            <StarRoundedIcon sx={foodItemComponentStyles.star} />
                            <StarRoundedIcon sx={foodItemComponentStyles.star} />
                            <StarRoundedIcon sx={foodItemComponentStyles.star} />
                            <StarRoundedIcon sx={foodItemComponentStyles.star} />
                        </Stack>

                        <Typography sx={{ color: 'orange', fontSize: { lg: '20px' } }}>
                            {formatToCurrency(price)}
                        </Typography>
                    </Stack>

                    <Stack alignItems={'center'} sx={foodItemComponentStyles.iconContainer}>
                        <AddShoppingCartRoundedIcon sx={foodItemComponentStyles.icon} />
                    </Stack>
                </Stack>
            </Box>

        </Stack>
    );
}

export default FoodItem;