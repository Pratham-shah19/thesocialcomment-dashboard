import React, { useState } from 'react';
// imported dependancies
import {Button,IconButton} from '@material-ui/core';
import Stats from './Stats.js';
import Report from './Report';
import PieChart from './Pie.js';
import Stats2 from './Stats2';
import AreaRechartComponent from './Areachart.js';
// icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CallIcon from '@material-ui/icons/Call';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './User.css';

function User() {
    const [searchinput,setSearchinput] = useState('');
    const [applicants,setApplicants] = useState(
        [{name:"Joseph",position:"Developer"},{name:"Jessica",position:"designer"},
        {name:"Pratham",position:"front-end"}
        ,{name:"Harry"},{name:"Ron"},{name:"Draco"},{name:"Hagrid"}
        ,{name:"Hermoine"},{name:"Snape"} ]);

        
    return (
        <div className="user">
            <div className="user__dashboard">
                <div className="dashboard__left">
                    <h2>Dashboard</h2>
                    <h3 className="dashboard__date">Monday,02 july 2020</h3>
                </div>
                <div className="dashboard__right">
                    <div className="dashboard__right__child1">
                         <NotificationsIcon/>
                         <h2 className="username">Nivesh Singh</h2>
                    </div>
                    <div className="dashboard__right__child2">
                        <Button variant="contained"color="primary" >+ Add</Button>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <input type="text" className="search"placeholder="Search for Application here" value={searchinput} onChange={(e)=>setSearchinput(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="user__container">
                <div className="container__progress">
                    <div className="progress__1">
                        <Stats DATA1={7956} DATA2={3.59} progress={73.2} color={"primary"} title={"Total applications"}/>
                        <Stats DATA1={4658} DATA2={6} progress={45} color={"secondary"} title={"Shortlisted"}/>
                        <Stats DATA1={1501} DATA2={4} progress={25} color={"primary"} title={"Total applications"}/>
                        
                    </div>
                    <div className="progress__2">
                        <div className="chart">
                            <div className="chart-div">
                                <p className="chart-header">Applications received</p>
                                <p>This year</p>
                                <p>This week</p>
                                <p>This today</p>
                                <MoreVertIcon/>
                            </div>
                            <AreaRechartComponent/>
                        </div>
                        <Report/>    
                    </div>
                    <div className="progress__3">
                        <Stats2/>
                        <div className="pie">
                            <PieChart/>
                        </div>
                    </div>
                </div>
                <div className="container__messages">
                    <div className="messages__sticker">
                        <p>Hello Nivesh Singh ,</p>
                        <p>you have new applicants today</p>
                        <img src="https://image.freepik.com/free-vector/cartoon-summer-background_52683-61812.jpg"/>
                    </div>
                    <div className="messages__applicants">
                        <div className="applicants__header">
                            <h4>New Applicants</h4>
                            <IconButton>
                                <ArrowForwardIosIcon/>
                            </IconButton>
                        </div>
                        <div className="applicants__body">
                            {applicants.map((applicant)=>{
                                return(<div className="applicant">
                                    <IconButton>
                                        <PersonOutlineIcon/>
                                    </IconButton>
                                    <p>{applicant.name}</p>
                                    <IconButton>
                                        <MailIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <CallIcon/>
                                    </IconButton>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
