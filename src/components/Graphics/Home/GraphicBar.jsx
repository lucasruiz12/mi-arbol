import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraphicBar = ({ carbonPoints }) => {
    const data = {
        series: [
            {
                name: 'Tu impacto',
                data: [
                    {
                        x: '',
                        y: carbonPoints,
                    },
                ],
            },
            {
                name: 'Persona promedio',
                data: [
                    {
                        x: '',
                        y: 9.45,
                    },
                ],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: '90%',
                width: '90%',
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%',
                    borderRadius: 5,
                },
            },
            colors: ['#C0D860', '#A4B46A'],
            dataLabels: {
                formatter: function (val, opt) {
                    const goals =
                        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                            .goals;

                    if (goals && goals.length) {
                        return `${val} / ${goals[0].value}`;
                    }
                    return val;
                },
                style: {
                    fontSize: '20px',
                    colors: ['white'],
                },
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',
                customLegendItems: ['Tu impacto', 'Persona promedio'],
                markers: {
                    fillColors: ['#C0D860', '#A4B46A'],
                },
                labels: {
                    colors: 'white',
                },
            },
            grid: {
                borderColor: '#e7e7e7',
            },
            xaxis: {
                labels: {
                    style: {
                        colors: 'white',
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: 'white',
                    },
                },
            },
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        chart: {
                            width: '80%',
                            height: 200,
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="graphics-background-home-bar" style={{ zIndex: 99 }}>
            <ReactApexChart options={data.options} series={data.series} type="bar" width={450} height={180} />
        </div>
    );
};

export default GraphicBar;
