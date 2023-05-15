import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Tabs, Tab } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import SwipeableViews from 'react-swipeable-views';
import { BoxContainer, AddressForm, ProfilePanel, OrderedPanel, AddressPanel, Snackbar } from '../../components';
import { selectAddresses } from '../../redux/reducers/addressesSlice';
import { accountPageStyles } from '../../styles/pageStyles';

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}


function Account() {
    const { addressCreationStatus } = useSelector(selectAddresses);
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    
    return (
      <>
        <BoxContainer title={'Akun'} account divider={value === 2} endContent={value === 2 && <AddressForm />}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={accountPageStyles.tabs}
          >
            <Tab label="Profil" {...a11yProps(0)} sx={accountPageStyles.tab} />
            <Tab label="Pemesanan" {...a11yProps(1)} sx={accountPageStyles.tab} />
            <Tab label="Alamat" {...a11yProps(2)} sx={accountPageStyles.tab} />
          </Tabs>
          <SwipeableViews
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <ProfilePanel value={value} index={0} />
            <OrderedPanel value={value} index={1} />
            <AddressPanel value={value} index={2} />
          </SwipeableViews>
        </BoxContainer>

        <Snackbar
            open={addressCreationStatus === 'success'}
            backgroundColor={'orange'}
            icon={<CheckRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
            message={'Alamat baru berhasil dibuat!'}
        />
        <Snackbar
            open={addressCreationStatus === 'failed'}
            backgroundColor={'red'}
            icon={<PriorityHighRoundedIcon sx={{ color: 'white', fontSize: { lg: '30px' } }} />}
            message={'Alamat baru gagal dibuat!'}
        />
      </>
    );
  }

export default Account;