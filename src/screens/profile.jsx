import { useLocation } from "react-router-dom";
import '../App.css'
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Profile() 
{
  const id = Math.round(Math.random()*22916);
  const location = useLocation();
  console.log(location);

  return (
    <div className="profile-div">
        <h1 className="heading3">Viewing Profile</h1>
    <AccountCircleOutlinedIcon className="userAccount" sx={{fontSize:"180px",marginLeft:"685px"}} />
    <div className="box22">

      <p className="h11"><span className="hh1">Profile id: </span>{id} </p>
      <p className="h12"><span className="hh2">Full Name: </span>{location.state.name}</p>
      <p className="h13"><span className="hh3">Designation: </span>{location.state.designation}</p>
      <p className="h14"><span className="hh4">Email: </span>{location.state.email}</p>
      <p className="h14"><span className="hh5">Date: </span>27-May-2022</p>

    </div>

    <Link className='dashButton' to="/dashboard">Go to DashBoard</Link>

    </div>
  );
}

export default Profile;