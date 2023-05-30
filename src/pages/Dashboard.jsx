import React from "react";
import { Link } from "react-router-dom";
import TableauDashboard from "../components/TableauDashboard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
export default () => (

    <div className="Glass">
      <Header  title="" subtitle="Dashboard"/>
      <Sidebar/>
      <div className="content">
        <div className="tableau-container">
           <TableauDashboard/>
           </div>
      </div>
      </div>
);