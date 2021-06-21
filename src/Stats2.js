import React from 'react';
import './Stats.css';
import {Button} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


function Stats2() {
    return (
        <div className="stats2">
            <div className="header">
                <div className="header__left">
                    <p>Referals and campaign stats</p>
                </div>
                <div className="header__right">
                    <p className="highlight"><SendIcon/>40 Campaigns sent in total</p>
                    <p>4 Campaigns sent in last month</p>


                </div>
            </div>
            <div className="body">
                <div className="body__stats">
                    <p>Users reached</p>
                    <p><TrendingUpIcon/>+12.3</p>
                    <h6>7956</h6>

                </div>

                <div className="body__stats">
                    <p>Referals</p>
                    <p><TrendingUpIcon/>+2.5</p>

                    <h6>0662</h6>
                </div>

                <div className="body__stats">
                    <p>Shares</p>
                    <p><TrendingUpIcon/>+0.56</p>

                    <h6>1478</h6>
                </div>

                <div className="body__stats">
                    <p>Applications</p>
                    <p><TrendingUpIcon/>+8.76</p>

                    <h6>0564</h6>
                </div>

               
            </div>
            <div className="bottom">
                <Button className="button" variant="contained" color="primary"><small>Start a new campaign now</small></Button>
                <Button className="button" variant="contained"color="secondary"><small>Pause all running campaign</small></Button>

            </div>
        </div>
    )
}

export default Stats2;