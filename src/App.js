import React, {useState} from 'react';
import {TextField,Button,Checkbox,FormControlLabel} from '@material-ui/core'
import {BsFillEyeFill,BsFillEyeSlashFill} from 'react-icons/bs'
import './App.css';

function App() {

  const [passwordType,setPasswordType] = useState('text')
    const [passwordIcon,setPassworIcon] = useState(<BsFillEyeSlashFill/>)
    const handelToggle = () =>{
      if(passwordType === 'password'){
        setPasswordType('text');
        setPassworIcon(<BsFillEyeSlashFill/>);
      }
      else{
        setPasswordType('password');
        setPassworIcon(<BsFillEyeFill/>);
      }
    }

  return (
    <div className="container">

        <div class="content">

            <div class="flex-div">

                <div class="logo">
                    <img src="./cockpit.png"/>
                </div>

                <form>
                  <div className="input">
                    <TextField margin="normal" sx={{mb:10}} className='input' id="outlined-basic" fullWidth required  variant="outlined" placeholder=" Olá, qual a sua Matrícula?" />
                  </div>
                  
                  <div>
                    <TextField  sx={{mb:10}} id="outlined-basic" fullWidth required type={passwordType} variant="outlined" placeholder="Por favor, digite sua senha." />
                    <span className='icon' onClick={handelToggle}>
                        {passwordIcon}
                    </span>
                  </div>
                 
                  <div className="checkbox">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Lembrar meus dados para acessos futuros." />
                  </div>
                  
                    <button class="login">Fazer Login</button>
                  
                </form>

            </div>

        </div>

    </div>
  );
}

export default App;
