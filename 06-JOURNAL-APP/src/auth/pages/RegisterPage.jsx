import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
    email: 'daniel.namur.dev@gmail.com',
    password: '123456',
    name: 'Daniel Namur'
};

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener al mas de 6 caracteres'],
    name: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

    const { name, email, password, onInputChange, formState, isFormValid, nameValid, emailValid, passwordValid } = useForm(formData, formValidations);

    console.log(nameValid);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <AuthLayout title='Registrate'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label='Nombre Completo' type='text' placeholder='John Doe' fullWidth name='name' value={name} onChange={onInputChange} />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label='Correo' type='email' placeholder='correo@ejemplo.cl' fullWidth name='email' value={email} onChange={onInputChange} />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label='Contraseña' type='password' placeholder='Contraseña' fullWidth name='password' value={password} onChange={onInputChange} />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                        <Grid item xs={12} sm={12}>
                            <Button type='submit' variant='contained' fullWidth>
                                Registrate
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};