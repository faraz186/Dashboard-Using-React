import ResponsiveDrawer from './menubar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../App.css'
import pic1 from '../pic1.PNG';
import pic2 from '../pic2.PNG';
import pic3 from '../pic3.PNG';
import pic4 from '../pic4.PNG';
import graph from '../graph.PNG'
import graph2 from '../graph2.PNG'
import calendar from '../calendar.PNG'
import projects from '../projects.PNG'
import { useLocation, useParams } from 'react-router-dom';


export default function Dashboard()
{

    const params= useParams();

    return(
        <div style={{backgroundColor:"rgb(229, 217, 240)",height:"850px"}}>
        <ResponsiveDrawer />
        <AccountCircleOutlinedIcon className='icon1' sx={{fontSize:"105px"}}/>
        <span className='name-div'>Hello, Mohammad Faraz</span> 
        <h2 className='para'>Check your activities in this Dashboard</h2>
    
        <img className='pic1' src={pic1} alt="" />

        <img className='pic2' src={pic2} alt="" />

        <img className='pic3' src={pic3} alt="" />

        <img className='pic4' src={pic4} alt="" />

        <img className='graph' src={graph} alt="" />

        <img style={{width:"230px",height:"200px"}} className='graph2' src={graph2} alt="" />

        <label className='date'>Friday May 27,2022</label>

        <img className='calendar' src={calendar} alt="" />

        <img className='project' src={projects} alt="" />

    
        </div>
        
    )
}