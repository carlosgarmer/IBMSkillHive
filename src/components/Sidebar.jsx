import React, { useState } from 'react';
import {UilSignOutAlt} from '@iconscout/react-unicons'
import {SidebarData} from "../Data/Data"
import { Link } from 'react-router-dom';
import {auth} from "../firebase"
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

//"menuItem active" key={index} style={{ color: "white" }}>
const Sidebar = () => {

    const [selected, setSelected] = useState(null)
    const navigate = useNavigate();

    const logOutHandler = async(event)=> {
        event.preventDefault();
        await signOut(auth);
        navigate("/");
    }

    return(
        <div className="Sidebar">
            <div className= "menu">
               {SidebarData.map((item, index)=>{
                return(
                    <Link to={item.path} style={{ color: 'black', textDecoration: 'none'}}>
                    <div 
                        className={selected === index ? 'menuItem active' : 'menuItem'} 
                        onMouseEnter={() => setSelected(index)} 
                        onMouseLeave={() => setSelected(null)}
                    >
                        <item.icon/>
                        <span>{item.heading}</span>
                    </div>
                    </Link>
                )
               })}
               
                <span></span>
               <div
                className = "menuItem"
                onClick={logOutHandler}
                style={{ color: 'black', textDecoration: 'none'}}>
                   
                    <UilSignOutAlt></UilSignOutAlt>
                    <span>
                        Sign Out
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;