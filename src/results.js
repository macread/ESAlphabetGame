import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';


export default function Progress(props){
  
    const data = {
        labels: props.letters,
        datasets: [
          {
            label: "Count for each letter",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: props.counts
          }
        ]
      };

    const options = {
        scales: {
            xAxes: [{
              ticks: {
                beginAtZero: false,
                stepSize: 1,
                stepValue: 1,
                max: 3
            }
            }]
        }
    }


  return (
    <div>
      <h2>{props.header}</h2>
        <HorizontalBar data={data} options={options}/>
    </div>
  );
};