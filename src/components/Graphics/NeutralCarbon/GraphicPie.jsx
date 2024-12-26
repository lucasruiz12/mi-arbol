import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './style.css';

const GraphicPie = () => {

    const categoriesLabel = [
        "Comunicación y expansión",
        "Ingeniería forestal",
        "Pago justo a la comunidad",
        "Cuidando raíces",
        "Mantenimiento web",
        "Planta de pino a reforestar",
        "Coordinación de plataforma y reforestaciones",
        "Programación y comunidad"
    ]

    const data = {
        series: [8, 15, 26, 10, 3, 27, 8, 3],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: [
                "Importante para que llegues a conocer de nosotros y juntos mitiguemos CO2e",
                "Una parte va destinada a biólogos, agrónomos e ingenieros forestales que validan nuestras superficies",
                "Remuneramos a las personas que hacen que suceda la magia de cada raíz plantada",
                "Cuidamos que tus raíces lleguen alto, vigilándolas los primeros 3 años después de ser plantadas",
                "Manejo de licencias y operaciones en nuestra página web",
                "Plantamos plantillas de invernadero garantizando la calidad de cada raíz",
                "Pago transmitido al equipo responsable de preparar las actividades y dar servicio a la plataforma",
                "Ayudamos a mantener la comunidad en servicio con actualizaciones",
            ],
            colors: ["#A4B46A", "#C8D390", "#C0D860", "#B4B886", "#604848", "#D6CBB2", "#8BB174", "#F4D06F"], // Colores según la paleta proporcionada
            legend: {
                show: false, // Oculta la leyenda estándar en móviles
            },
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
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactApexChart
                    options={data.options}
                    series={data.series}
                    type="pie"
                    width={380}
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
        </div>
    );
};

export default GraphicPie;
