import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = () => 
    {
    let obj1 = {
      name,
      email,
      designation,
      password,
    };
    console.log(obj1)
    navigate(`/profile/${name}`, { state: obj1 });
    }
    return(
        <div>
        <div className='divOne'>
        <h2 className="head1">Login</h2>
        <Box>
        <TextField sx={{fontSize: "29px"}} onChange={(e) => setName(e.target.value)} className='field' id="outlined-basic" label="Enter Name" color='error' />
        <br />
        <br />
        <br />
        <TextField sx={{fontSize: "29px"}} onChange={(e) => setDesignation(e.target.value)} className='field' id="outlined-basic" label="Enter Designation" color='error' />
        <br />
        <br />
        <br />
        <TextField sx={{fontSize: "29px"}} onChange={(e) => setEmail(e.target.value)} className='field' id="outlined-basic" label="Enter Email" color='error' />
        <br />
        <br />
        <br />
        <TextField sx={{fontSize: "29px"}} onChange={(e) => setPassword(e.target.value)} className='field' id="outlined-basic" type="password" label="Enter password" color='error' />
        <br />
        <br />
        </Box>
        <Button onClick={login} variant="outlined" sx={{color: "black",position: "absolute",top: "76%",left: "32%",border: "1px solid black"}}>Sign in</Button>
        </div>
        </div>
    )
}