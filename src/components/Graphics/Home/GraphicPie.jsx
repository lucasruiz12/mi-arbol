import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './style.css';

const GraphicPie = () => {

    const [tooltip, setTooltip] = useState({ visible: false, text: '', position: { x: 0, y: 0 } });

    const categoriesLabel = [
        "Transporte",
        "Energías no renovables",
        "Residuos y desechos",
    ];

    const data = {
        series: [17, 71, 12],
        options: {
            chart: {
                width: 500,
                type: 'pie',
                events: {
                    dataPointSelection: (event, chartContext, config) => {
                        const index = config.dataPointIndex;

                        if (index !== -1) {
                            const selectedElement = document.querySelector(
                                `.apexcharts-pie-series:nth-child(${index + 1}) path`
                            );
                            const allElements = document.querySelectorAll('.apexcharts-pie-series path');

                            // Resetear estilos previos
                            allElements.forEach((el) => (el.style.filter = 'none'));

                            // Aplicar efecto de "hover" al elemento seleccionado
                            if (selectedElement) {
                                selectedElement.style.filter = 'brightness(1.2)';
                            }

                            // Mostrar tooltip con el label
                            setTooltip({
                                visible: true,
                                text: categoriesLabel[index],
                                position: { x: event.clientX, y: event.clientY },
                            });
                        }
                    },
                },
            },
            labels: [
                "Transporte",
                "Energías no renovables",
                "Residuos y desechos",
            ],
            colors: ["#A4B46A", "#C8D390", "#C0D860"],
            legend: {
                show: false,
            },
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        chart: {
                            width: 300,
                        },
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="graphics-background pie-chart">
            <h4 style={{ color: "white" }}>Análisis de consumo</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactApexChart
                    options={data.options}
                    series={data.series}
                    type="pie"
                    width={500}
                    height={250}
                />
            </div>
            {tooltip.visible && (
                <div
                    className="custom-tooltip"
                    style={{
                        position: 'absolute',
                        top: tooltip.position.y,
                        left: tooltip.position.x,
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '8px',
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                        transform: 'translate(-50%, -120%)',
                        zIndex: 100,
                        width: '50vw', // Ancho fijo del tooltip
                        wordWrap: 'break-word', // Permite dividir palabras largas
                        whiteSpace: "normal",
                        textAlign: 'center', // Centra el texto
                    }}
                    onClick={() => setTooltip({
                        ...tooltip,
                        visible: false,
                    })}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    );
};

export default GraphicPie;
