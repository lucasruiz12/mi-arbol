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
                            show: false, // Oculta la leyenda estándar en móviles
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="graphics-background pie-chart">
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="pie"
                width={380}
            />
            <div className="legend-wrapper">
                {data.options.labels.map((label, index) => (
                    <div className="category" key={index}>
                        <div
                            className="color-box"
                            style={{ backgroundColor: data.options.colors[index] }}
                        ></div>
                        <p className="label-legend">
                        {label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GraphicPie;
