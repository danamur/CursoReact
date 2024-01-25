import { useSelector } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, Hidden, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);

    return (
        <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Hidden smDown>
                <Drawer variant='permanent' open={true} sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
                    <Toolbar>
                        <Typography variant='h6' noWrap component='div'>
                            {displayName}
                        </Typography>
                    </Toolbar>
                    <Divider />

                    <List>
                        {
                            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                                <ListItem key={text}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>
                                        <Grid>
                                            <ListItemText primary={text} />
                                            <ListItemText secondary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>

                </Drawer>
            </Hidden>
        </Box>
    );
};