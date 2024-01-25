import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid className="animate__animated animate__fadeIn animate__faster" container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'> 8 de Diciembre, 2023</Typography>
        </Grid>
        <Grid item>
            <Button variant='contained' color='primary'>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container sx={{ my: 3}}>
            <TextField type='text' variant='outlined' fullWidth placeholder='Ingrese un titulo' label='Titulo' sx={{ border: 'none', mb: 2 }} />
            <TextField type='text' variant='outlined' fullWidth multiline placeholder='Comenta tu dia' label='¿Que tienes para contar?' minRows={ 5 } />
        </Grid>

        <ImageGallery />
    </Grid>
  );
};
