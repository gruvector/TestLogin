import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Radio } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {useAppDispatch } from '../app/hooks';
import { increment } from '../app/reducers/selectSlice';

import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function SignUp() {  
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [currentGender, setCurrentGender] = useState("female");
  const dispatch = useAppDispatch();

  const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentGender((event.target as HTMLInputElement).value);
  };

  async function create_user (email:String, password:String) {

    const auth = getAuth();
    
    await createUserWithEmailAndPassword(auth, email as string, password as string)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("正常に登録されました。");
      dispatch(increment());
    })
    .catch((error) => {

      const errorMessage = error.message;
      if (errorMessage.indexOf("invalid-email") !== -1) {
        alert("メールの種類が間違っています。 正しく入力。")
      } else if (errorMessage.indexOf("weak-password") !== -1) {
        alert("パスワードは6文字以上である必要があります")
      }

    });
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    create_user(email as string, password as string);
  }

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              サインアップ
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField autoComplete="given-name" name="name" required fullWidth id="Name" label="ユーザー名" autoFocus />
                </Grid>
                <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="メールアドレス" name="email" autoComplete="email" />
                </Grid>
                <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="パスワード" type="password" id="password" autoComplete="new-password" />
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="生年月日" className='fullwidth' value={currentDate} onChange={(newcurrentDate) => setCurrentDate(newcurrentDate)} />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                <FormControl className='d-flexStart'>
                  <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={currentGender} onChange={handleGender}>
                    <FormControlLabel value="female" control={<Radio color='primary' />} label="女" />
                    <FormControlLabel value="male" control={<Radio color='primary' />} label="男" />
                  </RadioGroup>
                </FormControl>
                </Grid> 
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" name='useTerm'/>} label="利用規約への同意"/><a href='https://menherasenpai.notion.site/457df49475494671807673a0a3346451?pvs=25'>行く</a>
                </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>サインアップ</Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="#" variant="body2" onClick={()=> dispatch(increment())}>アカウントをお持ちですか? サインイン</Link>
                </Grid>
                </Grid>
            </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}