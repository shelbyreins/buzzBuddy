/* App.js */
import React, {Component} from 'react';
import CanvasJSReact from './canvasjs/canvasjs.react';
import "./style.css"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Events Tracker"
            },
            axisX: {
                title: "Events",
                reversed: true,
            },
            axisY: {
                title: "# of days",
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: [
                    { y: 1, label: "Attend AA" },
                    { y: 6, label: "Watched Video" },
                    { y: 12, label: "MeetUp" },
                    { y: 18, label: "Alcohol" },
                    { y: 26, label: "No Alcohol" },
                    { y: 31, label: "Other" },
                    // { y: 330000000, label: "July" },
                    // { y: 330000000, label: "August" },
                    // { y: 330000000, label: "September" },
                    // { y: 330000000, label: "October" },
                    // { y: 330000000, label: "November" },
                    // { y: 330000000, label: "December" },
                ]
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
}

export default BarChart;

// class BarChart extends Component {
//     render() {



//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         title:{
//             text: "Evening Sales in a Restaurant"
//         },
//         axisX: {
//             valueFormatString: "DDD"
//         },
//         axisY: {
//             prefix: "$"
//         },
//         toolTip: {
//             shared: true
//         },
//         legend:{
//             cursor: "pointer",
//             itemclick: toggleDataSeries
//         },
//         data: [{
//             type: "stackedBar",
//             name: "Meals",
//             showInLegend: "true",
//             xValueFormatString: "DD, MMM",
//             yValueFormatString: "$#,##0",
//             dataPoints: [
//                 { x: new Date(2017, 0, 30), y: 56 },
//                 { x: new Date(2017, 0, 31), y: 45 },
//                 { x: new Date(2017, 1, 1), y: 71 },
//                 { x: new Date(2017, 1, 2), y: 41 },
//                 { x: new Date(2017, 1, 3), y: 60 },
//                 { x: new Date(2017, 1, 4), y: 75 },
//                 { x: new Date(2017, 1, 5), y: 98 }
//             ]
//         },
//         {
//             type: "stackedBar",
//             name: "Snacks",
//             showInLegend: "true",
//             xValueFormatString: "DD, MMM",
//             yValueFormatString: "$#,##0",
//             dataPoints: [
//                 { x: new Date(2017, 0, 30), y: 86 },
//                 { x: new Date(2017, 0, 31), y: 95 },
//                 { x: new Date(2017, 1, 1), y: 71 },
//                 { x: new Date(2017, 1, 2), y: 58 },
//                 { x: new Date(2017, 1, 3), y: 60 },
//                 { x: new Date(2017, 1, 4), y: 65 },
//                 { x: new Date(2017, 1, 5), y: 89 }
//             ]
//         },
//         {
//             type: "stackedBar",
//             name: "Drinks",
//             showInLegend: "true",
//             xValueFormatString: "DD, MMM",
//             yValueFormatString: "$#,##0",
//             dataPoints: [
//                 { x: new Date(2017, 0, 30), y: 48 },
//                 { x: new Date(2017, 0, 31), y: 45 },
//                 { x: new Date(2017, 1, 1), y: 41 },
//                 { x: new Date(2017, 1, 2), y: 55 },
//                 { x: new Date(2017, 1, 3), y: 80 },
//                 { x: new Date(2017, 1, 4), y: 85 },
//                 { x: new Date(2017, 1, 5), y: 83 }
//             ]
//         },
//         {
//             type: "stackedBar",
//             name: "Dessert",
//             showInLegend: "true",
//             xValueFormatString: "DD, MMM",
//             yValueFormatString: "$#,##0",
//             dataPoints: [
//                 { x: new Date(2017, 0, 30), y: 61 },
//                 { x: new Date(2017, 0, 31), y: 55 },
//                 { x: new Date(2017, 1, 1), y: 61 },
//                 { x: new Date(2017, 1, 2), y: 75 },
//                 { x: new Date(2017, 1, 3), y: 80 },
//                 { x: new Date(2017, 1, 4), y: 85 },
//                 { x: new Date(2017, 1, 5), y: 105 }
//             ]
//         },
//         {
//             type: "stackedBar",
//             name: "Takeaway",
//             showInLegend: "true",
//             xValueFormatString: "DD, MMM",
//             yValueFormatString: "$#,##0",
//             dataPoints: [
//                 { x: new Date(2017, 0, 30), y: 52 },
//                 { x: new Date(2017, 0, 31), y: 55 },
//                 { x: new Date(2017, 1, 1), y: 20 },
//                 { x: new Date(2017, 1, 2), y: 35 },
//                 { x: new Date(2017, 1, 3), y: 30 },
//                 { x: new Date(2017, 1, 4), y: 45 },
//                 { x: new Date(2017, 1, 5), y: 25 }
//             ]
//         }]
//     });
//     chart.render();

//     return(
    
//     function toggleDataSeries(e) {
//         if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         }
//         else {
//             e.dataSeries.visible = true;
//         }
//         chart.render();
//     }
//     )
    
//     }
    

// }


// export default BarChart;