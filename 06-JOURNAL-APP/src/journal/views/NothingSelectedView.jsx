import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid className="animate__animated animate__fadeIn animate__faster" container spacing={0} direction='column' alignItems='center' justifyContent='center' sx={{ minHeight: '100vh', padding: 4 }} >
            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100 }} />
            </Grid>

            <Grid item xs={ 12 }>
                <Typography color='white' variant='h5'>Selecciona o crea una nueva nota</Typography>
            </Grid>
        </Grid>
    );
};
