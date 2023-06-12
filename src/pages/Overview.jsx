import React from "react";
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import MainDash from "../components/MainDash" ;
import { auth } from "../firebase";
import Header from "../components/Header";
import TableauGraph from "../components/TableauGraph";

export default () => (
    <div className="Glass">
        <Header  title="Welcome, " subtitle={auth.currentUser.email}/>
        <Sidebar/>
        <div className="tableau-container">
           <TableauGraph/>
           </div>
   </div>
);