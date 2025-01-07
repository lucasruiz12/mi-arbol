import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './style.css';

const GraphicPie = () => {

    const [tooltip, setTooltip] = useState({ visible: false, text: '', position: { x: 0, y: 0 } });

    const categoriesLabel = [
        "Comunicación y expansión",
        "Ingeniería forestal",
        "Pago justo a la comunidad",
        "Cuidando raíces",
        "Planta de pino a reforestar",
        "Coordinación de plataforma y reforestaciones",
        "Programación web y mantenimiento de comunidad",
    ];

    const data = {
        series: [8, 15, 26, 10, 27, 8, 6],
        options: {
            chart: {
                width: 450,
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
                "Importante para que llegues a conocer de nosotros y juntos mitiguemos CO2e",
                "Una parte va destinada a biólogos, agrónomos e ingenieros forestales que validan nuestras superficies",
                "Remuneramos a las personas que hacen que suceda la magia de cada raíz plantada",
                "Cuidamos que tus raíces lleguen alto, vigilándolas los primeros 3 años después de ser plantadas",
                "Plantamos plantillas de invernadero garantizando la calidad de cada raíz",
                "Pago transmitido al equipo responsable de preparar las actividades y dar servicio a la plataforma",
                "Ayudamos a mantener la comunidad en servicio con actualizaciones manejando licencias y operaciones web",
            ],
            colors: ["#A4B46A", "#C8D390", "#C0D860", "#B4B886", "#D6CBB2", "#8BB174", "#F4D06F"],
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
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactApexChart
                    options={data.options}
                    series={data.series}
                    type="pie"
                    width={450}
                />
            </div>
            <div className="legend-wrapper">
                {categoriesLabel.map((label, index) => (
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
