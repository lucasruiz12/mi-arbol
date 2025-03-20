import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraphicBar = ({ carbonPoints }) => {
    const data = {
        series: [
            {
                name: 'Consumo',
                data: [
                    {
                        x: 'Su consumo',
                        y: carbonPoints,
                    },
                    {
                        x: 'Persona promedio',
                        y: 9.45,
                    },
                ],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: '100%',
                width: '100%', // Se ajusta automáticamente al 100% del contenedor
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '50%',
                    borderRadius: 5,
                    colors: {
                        ranges: [
                            { from: 0, to: 10000, color: '#A4B46A' },
                            { from: 0, to: 10000, color: '#C0D860' },
                            { from: 0, to: 10000, color: '#C8D390' },
                        ],
                    },
                },
            },
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
                customLegendItems: ['Consumo'],
                markers: {
                    fillColors: ['#A4B46A', '#FF4560'],
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
                    breakpoint: 768, // Para pantallas más pequeñas
                    options: {
                        chart: {
                            width: '100%',
                            height: 200, // Ajustamos la altura para pantallas pequeñas
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="graphics-background-home-bar" style={{zIndex: 99}}>
            <ReactApexChart options={data.options} series={data.series} type="bar" width={600} height={200} />
        </div>
    );
};

export default GraphicBar;
