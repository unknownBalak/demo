import React from "react";
import { Bar } from "react-chartjs-2";


class AbsenteesGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {
            labels: [
              "Mon",
              "Tue", 
              "Wed",
              "Thu",
              "Fri",
              "Sat" 
            ],
            datasets: [
              {
                label: "Student Subscribed for the Class",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                //stack: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: this.props.data1  //how many students have subscribed to class for that day.
              },
    
              {
                label: "Student attended the Class",
                backgroundColor: "rgba(155,231,91,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: this.props.data2 //how many students have attended the class for that very day. 
              }
            ]
          }
        };
      }
    
  render() {
    const options = {
      responsive: true,
      legend: {
        display: false
      },
      type: "bar"
    }; 
    let data2 = this.props.data2
     console.log(data2)
    return (

        <div style={{width:"500px"}}>
      <Bar
        data={this.state.data}
        width={null}
        height={null}
        options={options}
      />
        </div>

    );
  }
}

export default AbsenteesGraph
