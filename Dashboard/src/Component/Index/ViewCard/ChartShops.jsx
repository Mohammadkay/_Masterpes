import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';




export default function ChartShops({ adminInfo }) {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState([]);

    const fetchChartShops = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/products/get/count')
            setChartData(res.data)
            
             createChart(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createChart = (chartData) => {
        const labels = ["Electronics",   "Home", "Garden", "Games"];
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


