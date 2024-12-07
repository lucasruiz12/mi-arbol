import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './style.css';

const GraphicPie = () => {
    const data = {
        series: [40, 25, 35],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Hogar', 'Transporte', 'Alimentación'],
            colors: ['#A4B46A', '#82816B', '#C8D390'], // Colores según la paleta proporcionada
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                colors: ['#604848'], // Color del texto del legend
                                useSeriesColors: false,
                            },
                        },
                    },
                },
            ],
            legend: {
                labels: {
                    colors: ['#604848'], // Color del texto del legend
                    useSeriesColors: false,
                },
            },
            tooltip: {
                theme: 'light', // Hace el fondo del tooltip más claro
                style: {
                    fontSize: '1rem', // Tamaño del texto
                    color: '#604848', // Color del texto del tooltip (negro)
                },
                marker: {
                    show: true, // Si deseas mostrar el marcador en el tooltip
                },
            },
        },
    };

    return (
        <div className="graphics-background">
            <ReactApexChart options={data.options} series={data.series} type="pie" width={400} />
        </div>
    );
};

export default GraphicPie;
