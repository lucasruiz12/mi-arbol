import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GraphicBar = () => {
    const data = {
        series: [
            {
                name: 'Consumo',
                data: [
                    {
                        x: 'Tu consumo',
                        y: 4800,
                        goals: [
                            {
                                name: 'Consumo Ideal',
                                value: 2000,
                                strokeWidth: 5,
                                strokeDashArray: 5,
                                strokeColor: '#FF4560',
                            },
                        ],
                    },
                    {
                        x: 'Promedio Mundial',
                        y: 3800,
                        goals: [
                            {
                                name: 'Consumo Ideal',
                                value: 2000,
                                strokeWidth: 5,
                                strokeDashArray: 5,
                                strokeColor: '#FF4560',
                            },
                        ],
                    },
                    {
                        x: 'Promedio en México',
                        y: 3600,
                        goals: [
                            {
                                name: 'Consumo Ideal',
                                value: 2000,
                                strokeWidth: 5,
                                strokeDashArray: 5,
                                strokeColor: '#FF4560',
                            },
                        ],
                    },
                ],
            },
        ],
        options: {
            chart: {
                height: 400,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '50%',
                    borderRadius: 5,  // Redondeo general de todas las barras
                    colors: {
                        ranges: [
                            { from: 0, to: 10000, color: '#A4B46A' },  // Color para la primera barra
                            { from: 0, to: 10000, color: '#C0D860' },  // Color para la segunda barra
                            { from: 0, to: 10000, color: '#C8D390' },  // Color para la tercera barra
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
                    fontSize: '14px',
                    colors: ['#604848'], // Cambiar color del texto a marrón
                },
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',  // Leyenda arriba
                customLegendItems: ['Consumo', 'Consumo Ideal'],
                markers: {
                    fillColors: ['#A4B46A', '#FF4560'],  // Colores de las leyendas
                },
                labels: {
                    colors: '#604848', // Cambiar color del texto de la leyenda a marrón
                },
            },
            grid: {
                borderColor: '#e7e7e7',
            },
            xaxis: {
                labels: {
                    style: {
                        colors: '#604848', // Cambiar color del texto de los ejes X
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#604848', // Cambiar color del texto de los ejes Y
                    },
                },
            },
        },
    };

    return (
        <div className="graphics-background">
            <ReactApexChart options={data.options} series={data.series} type="bar" height={250} width={500} />
        </div>
    );
};

export default GraphicBar;
