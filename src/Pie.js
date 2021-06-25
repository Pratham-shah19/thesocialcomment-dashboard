import React from 'react';
import { Pie } from 'react-chartjs-2';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const data = {
  
  datasets: [
    {
     
      data: [19,13,4],
      backgroundColor: [
        '#82ca9d',
        'rgb(220, 0, 78)',
        '#3f39b5'
        
      ],
      borderColor: [
        '#82ca9d',
        'rgb(220, 0, 78)',
        '#3f39b5'
          
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <p>Open positions by department&nbsp;<MoreHorizIcon/></p>
    <Pie data={data} />
  </>
);

export default PieChart;