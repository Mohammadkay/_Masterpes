import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';




export default function ChartShops({ adminInfo }) {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState([]);

    const fetchChartShops = async () => {
        try {
            const res = await axios.get('http://localhost:9000/api/products/get/count')
            setChartData(res.data)
            
             createChart(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createChart = (chartData) => {
        const labels = ["Electronics", "Beauty", "Computers", "Home", "Garden", "Games"];
    console.log(chartData)
        const config = {
            type: 'bar',
            data: {
                labels: labels, // Set category names as labels
                datasets: [{
                    label: 'Product Count', // Label for the dataset
                    data: chartData, // Use chartData directly as the data
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
    
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            chartRef.current.chart = new Chart(chartRef.current, config);
        }
    };
    
    
    useEffect(() => {
        fetchChartShops();
    }, []);

    useEffect(() => {
        createChart();
    }, []);

    return (
        <>
            <canvas ref={chartRef} width="400" height="200" />
        </>
    );
}



// export function ChartServices({ adminInfo }) {
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState([]);

//     const fetchChartServices = async () => {
//         try {
//             const res = await axios.get('http://localhost:9000/api/chart/services', {
//                 headers: {
//                     Authorization: 'Bearer ' + adminInfo.token,
//                 },
//             });
//             createChart(res.data)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const createChart = (data) => {
//         const config = {
//             type: 'bar',
//             data: {
//                 labels: ['Accidents', 'Before Buying', 'Location Pieces', 'Maintenance Request', 'Rental'],
//                 datasets: [{
//                     label: 'Services',
//                     data: [data?.accidents, data?.beforeBuying, data?.locationPieces, data?.maintenanceRequest, data?.rental],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(255, 159, 64, 0.2)',
//                         'rgba(255, 205, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(201, 203, 207, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgb(255, 99, 132)',
//                         'rgb(255, 159, 64)',
//                         'rgb(255, 205, 86)',
//                         'rgb(75, 192, 192)',
//                         'rgb(54, 162, 235)',
//                         'rgb(153, 102, 255)',
//                         'rgb(201, 203, 207)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         };

//         if (chartRef.current) {
//             if (chartRef.current.chart) {
//                 chartRef.current.chart.destroy();
//             }
//             chartRef.current.chart = new Chart(chartRef.current, config);
//         }
//     }

//     useEffect(() => {
//         fetchChartServices();
//     }, []);

//     useEffect(() => {
//         createChart();
//     }, [chartData]);

//     return (
//         <>
//             <canvas ref={chartRef} width="400" height="200" />
//         </>
//     );
// }


// export function ChartOverallPerformance({ adminInfo }) {
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState([]);

//     const fetchChartOverallPerformance = async () => {
//         try {
//             const res = await axios.get('http://localhost:9000/api/chart/overallPerformance', {
//                 headers: {
//                     Authorization: 'Bearer ' + adminInfo.token,
//                 },
//             });
//             createChart(res.data)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const createChart = (data) => {
//         const config = {
//             type: 'polarArea',
//             data: {
//                 labels: ['Cars', 'Buses', 'Machines', 'Motorcycles', 'Scrap', 'SpareParts', 'Trucks', 'Accidents', 'Before Buying', 'Location Pieces', 'Maintenance Request', 'Rental'],
//                 datasets: [{
//                     label: 'Overall Performance',
//                     data: [data?.Cars, data?.Buses, data?.Machines, data?.Motorcycles, data?.Scrap, data?.SpareParts, data?.Trucks,
//                     data?.accidents, data?.beforeBuying, data?.locationPieces, data?.maintenanceRequest, data?.rental],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(255, 159, 64, 1)',
//                         'rgba(255, 205, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(201, 203, 207, 1)',
//                         'rgba(255,127,80, 1)',
//                         'rgba(255,69,0, 1)',
//                         'rgba(238,232,170, 1)',
//                         'rgba(255,255,0, 1)',
//                         'rgba(218,165,32, 1)',
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(255, 159, 64, 1)',
//                         'rgba(255, 205, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(201, 203, 207, 1)',
//                         'rgba(255,127,80, 1)',
//                         'rgba(255,69,0, 1)',
//                         'rgba(238,232,170, 1)',
//                         'rgba(255,255,0, 1)',
//                         'rgba(218,165,32, 1)',
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {

//             }
//         };

//         if (chartRef.current) {
//             if (chartRef.current.chart) {
//                 chartRef.current.chart.destroy();
//             }
//             chartRef.current.chart = new Chart(chartRef.current, config);
//         }
//     }

//     useEffect(() => {
//         fetchChartOverallPerformance();
//     }, []);

//     useEffect(() => {
//         createChart();
//     }, [chartData]);

//     return (
//         <>
//             <canvas ref={chartRef} width="400" height="200" />
//         </>
//     );
// }