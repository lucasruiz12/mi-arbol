import React from 'react';
import { Chart } from 'react-google-charts';

function GraphicPie() {
    const data = [
        ["Consumo", "Porcentaje"],
        ["Hogar", 16],
        ["Transporte", 15],
        ["Alimentación", 12],
        ["Residuos", 11],
        ["Otros", 21],
    ];

    const options = {
        title: "",
        pieHole: 0.4, // Creates a Donut Chart
        is3D: true, // Enables 3D view
        pieStartAngle: 100, // Rotates the chart
        sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
        legend: {
            position: "right",
            alignment: "center",
            textStyle: {
                color: "white",
                fontSize: 16,
            },
        },
        colors: [
            "#66BB6A", // Verde (Hogar - Energía limpia)
            "#0277BD", // Azul oscuro (Transporte)
            "#FFB300", // Amarillo (Alimentación)
            "#8D6E63", // Marrón (Residuos)
            "#BDBDBD", // Gris (Otros)
        ],
        tooltip: {
            isHtml: true,
            trigger: 'hover',
            // Tooltip sin puntos, solo nombre e ítem
            textStyle: {
                color: 'black',
                fontSize: 14,
            },
        },
        backgroundColor: "transparent", // Fondo del gráfico
        chartArea: {
            backgroundColor: "#fff", // Fondo blanco dentro del gráfico
            width: '95%', // Ajusta el ancho
            height: '100%', // Ajusta la altura
        },
        slices: {
            1: { offset: 0.2 }, // Explota el segundo segmento
        },
    };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            height={"300px"}
        />
    );
}

export default GraphicPie;
