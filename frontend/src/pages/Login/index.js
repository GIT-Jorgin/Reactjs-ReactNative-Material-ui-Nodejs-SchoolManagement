import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import UAPP from '../../src/UAPP.png'
import './style.css';
import '../global.css';

export default function Login(){
    const ButtonLoginStyle = {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        marginTop: 15
      };
      const LoginTextField = {
        marginTop: 15,
      };
    return(
        <div className="mainContainer">
            <div className="Logo">
              <img alt="logo" width="300" src={UAPP} />
            </div>
            <form noValidate autoComplete="off">
                <h4 className="LoginTitle">Login</h4>
                <TextField style={LoginTextField}
          id="filled-helperText"
          label="CPF"
          variant="filled"
        />
                <TextField style={LoginTextField}
                    type="password"
                    id="filled-helperText"
                    label="Senha"
                    variant="filled"
        />
                <Button style={ButtonLoginStyle} size="large" variant="contained" color="secondary" disableElevation>
                ENTRAR
                </Button>
            </form>
        </div>
    );
}