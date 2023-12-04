import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';

import {useAppDispatch } from '../app/hooks';
import { increment } from '../app/reducers/selectSlice';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {

    const dispatch = useAppDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email = data.get('email');
        let password = data.get('password');

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email as string, password as string)
        .then((userCredential) => {
            // Signed in 
            alert("ログインに成功しました。");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('入力が間違っています。');
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">サインイン</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth id="email" label="メールアドレス" name="email" autoComplete="email" autoFocus />
                        <TextField margin="normal" required fullWidth name="password" label="パスワード" type="password" id="password" autoComplete="current-password" />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >サインイン</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">パスワードを忘れましたか？</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={()=>dispatch(increment())}>{"サインアップに移動する"}</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}