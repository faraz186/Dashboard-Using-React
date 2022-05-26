import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import Login from './login';
import { Link } from 'react-router-dom';


export default function SignUp()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => 
    {
    let obj = {
      name,
      email,
      designation,
      password,
    };
    console.log(obj)

    };
    return(
        <div>
        <div className='divTwo'>
        <h2 className="head1">Sign Up</h2>
        <Box>
        <TextField sx={{fontSize: "29px"}} onChange={(e) => setName(e.target.value)} className='field' id="outlined-basic" label="Enter Name" color='error' />
        <br />
        <br />
        <br />
        <TextField sx={{fontSize: "29px"}}  onChange={(e) => setEmail(e.target.value)} className='field' id="outlined-basic" label="Enter Email" color='error' />
        <br />
        <br />
        <br />
        <TextField sx={{fontSize: "29px"}}  onChange={(e) => setPassword(e.target.value)} className='field' id="outlined-basic" type="password" label="Enter password" color='error' />
        <br />
        <br />
        </Box>
        <Button onClick={()=>alert("Sign Up Successfully!!")} variant="outlined" sx={{color: "black",position: "absolute",top: "64.5%",padding: "8px 25px",left: "32%",border: "1px solid black"}}>Sign Up</Button>
        </div>
        <Link className='LoginButton' to="/login">LOGIN</Link>
        
        </div>
    )
}