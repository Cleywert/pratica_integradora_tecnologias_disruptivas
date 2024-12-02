import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, createTheme, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';

const theme = createTheme({
    palette: {
        gray: {
            main: '#6c757d',
            dark: '#5c636a',
            contrastText: '#FFF',
        }
    }
})

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Grid margin={'5rem 25% 0'}>
                <h1>LOGIN</h1>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs margin={'3rem 25%'}>
                    <FormControl fullWidth>
                        <Input id="login_nome" aria-describedby="login_nome_help_text" value={login} 
                        onChange={e => { setLogin(e.target.value) }} />
                        <FormHelperText id="login_nome_help_text">Login.</FormHelperText>
                    </FormControl>
                    <FormControl fullWidth>
                        <Input id="password" type='password' aria-describedby="password_help_text" value={password} 
                        onChange={e => { setPassword(e.target.value) }} />
                        <FormHelperText id="password_help_text">Senha.</FormHelperText>
                    </FormControl>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2} margin={'24px 0 0 0'}>
                            <Grid item>
                                <Button variant='outlined' color='gray'> Limpar </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained'> Entrar </Button>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>

    );
}

export default Login;