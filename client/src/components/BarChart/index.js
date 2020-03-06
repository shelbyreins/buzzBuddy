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
                text: "Monthly Alcohol Intake"
            },
            axisX: {
                title: "Months",
                reversed: true,
            },
            axisY: {
                title: "Quantity of Alcohol",
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: [
                    { y: 2200000000, label: "January" },
                    { y: 1800000000, label: "February" },
                    { y: 800000000, label: "March" },
                    { y: 563000000, label: "April" },
                    { y: 376000000, label: "May" },
                    { y: 336000000, label: "June" },
                    { y: 330000000, label: "July" },
                    { y: 330000000, label: "August" },
                    { y: 330000000, label: "September" },
                    { y: 330000000, label: "October" },
                    { y: 330000000, label: "November" },
                    { y: 330000000, label: "December" },
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