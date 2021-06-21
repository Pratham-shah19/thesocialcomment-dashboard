import React,{useEffect, useState} from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {IconButton,CircularProgress} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './Stats.css';

function Stats({DATA1,DATA2,progress,color,title}) {
    const [showprogress,setShowprogress] = useState(0);
    useEffect(()=>{
        for (let i=1;i<=progress;i++){
            setShowprogress(i);
        }
    },[])
    return (
        <div className="stats">
                <div className="stats__header">
                        <h4>{title}</h4>
                        <IconButton><MoreHorizIcon/></IconButton>
                </div> 
                <div className="stats__body">
                        <div className="body__left">
                            <h3>{DATA1}</h3>
                            <p className="stats_data"><TrendingUpIcon/>{DATA2}%</p>
                        </div>
                        <div className="body_right">
                                <CircularProgress className="circularprogress"variant="determinate" value={showprogress} size="60px" color={color}/>
                            
                                <div className="showprogress">
                                    {showprogress}%
                                </div>
                            
                        </div>
                </div>
        </div>
    )
}

export default Stats 
