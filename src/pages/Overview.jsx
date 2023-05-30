import React from "react";
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import MainDash from "../components/MainDash" ;
import { auth } from "../firebase";

export default () => (
    <div className="Glass">
        <div className="Welcome">Welcome, {auth.currentUser.email}</div>
        <Sidebar/>
        <div className="content">   
            <div className="content-dashboard">
                {/*Container for the doughnut graphs*/}
                <div className="MainDashboard">
                    <div className="Progress">
                        <MainDash
                        progressPercentage={76}
                        progressColor={"#F8EBBD"}/>
                    </div>
                    <div className="designProgress">
                        <MainDash
                                progressPercentage={60}
                                progressColor={"#F8EBBD"}/>
                    </div>
                    <div className="softwareProgress">
                        <MainDash progressPercentage={60}
                            progressColor={"#BEF8BD"}/>
                    </div>
                    <div className="administrationProgress">
                        <MainDash progressPercentage={60}
                            progressColor={"#BEF8BD"}/>
                    </div>
                    <div className="hrProgress">
                        <MainDash progressPercentage={60}
                            progressColor={"#BEF8BD"}/>
                    </div>
                </div>
            </div>
            <div className="content-bar">
                <div className="smartG">

                </div>
            </div>
        </div>
   </div>
);