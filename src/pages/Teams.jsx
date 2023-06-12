import React from "react";
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import TableauDashboard from "../components/TableauDashboard";

export default () => (
    <div className="Glass">
        <Header  title="" subtitle="All Employees"/>
        <Sidebar/>
        <div className="tableau-container">
           <TableauDashboard/>
           </div>
    </div>
);