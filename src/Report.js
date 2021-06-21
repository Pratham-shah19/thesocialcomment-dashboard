import React from 'react';
import {LinearProgress} from '@material-ui/core';
import './Report.css';

function Report() {
    const colors = [{value:38,color:'primary',type:"Applications"},{value:83,color:'secondary',type:"shortlisted"},{value:43,color:'primary',type:"rejected"},{value:69,color:'secondary',type:"Onhold"},{value:25,color:'primary',type:"Finalised"}];
    
    return (
        <div className="report">
            <h3>Total applications</h3>
            
            <div className="report_container">
                <div className="container__left">
                    {colors.map((color)=>{
                        return(
                            <div>
                                <p className="type">{color.type}</p>                          
                            </div>
                        )
                    })}
                </div>
                <div className="container__right">
                    {colors.map((color)=>{
                                return( 
                                        <div>
                                            
                                            <LinearProgress className="linear"variant="determinate" value={color.value} color={color.color} max="100"/>
                                        </div>
                                    )
                            })}
                </div>
                
                    
            </div>
                
        </div>
    )
}

export default Report
