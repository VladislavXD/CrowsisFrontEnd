import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MediaBottomNav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const [smallScreen, setSmallScreen] = React.useState(window.innerWidth <= 720);


    React.useEffect(() => {
        const handleSize = () => {
            setSmallScreen(window.innerWidth <= 720);
        }

        window.addEventListener('resize', handleSize);

        return () =>{
            window.removeEventListener('resize', handleSize);
        }
    }, [])


    return (
        smallScreen ? (
            <BottomNavigation className='nav-bottom' sx={{ width: 900 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Basket"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Catalog"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction 
                label="Profile" 
                value="folder" 
                icon={<FolderIcon />} />
            </BottomNavigation>
        ) : ''

    );
}