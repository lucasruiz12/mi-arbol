import React, { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';

// Hook para obtener las dimensiones de la ventana
const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

const GraphicPie = () => {

    const [selectedValue, setSelectedValue] = useState("");

    const { width } = useWindowDimensions(); // Obtiene el ancho de la ventana

    const data = [
        { id: 'Comunicación y expansión', label: 'Importante para que llegues a conocer de nosotros y juntos mitiguemos CO2e', value: 8, color: '#A4B46A' },
        { id: 'Ingeniería forestal', label: 'Una parte va destinada a biólogos, agrónomos e ingenieros forestales que validan nuestras superficies', value: 15, color: '#C8D390' },
        { id: 'Programación web y mantenimiento de comunidad', label: 'Ayudamos a mantener la comunidad en servicio con actualizaciones manejando licencias y operaciones web', value: 6, color: '#F4D06F' },
        { id: 'Cuidando raíces', label: 'Cuidamos que tus raíces lleguen alto, vigilándolas los primeros 3 años después de ser plantadas', value: 10, color: '#C0D860' },
        { id: 'Planta de pino a reforestar', label: 'Plantamos plantillas de invernadero garantizando la calidad de cada raíz', value: 27, color: '#D6CBB2' },
        { id: 'Coordinación de plataforma y reforestaciones', label: 'Pago transmitido al equipo responsable de preparar las actividades y dar servicio a la plataforma', value: 8, color: '#8BB174' },
        { id: 'Pago justo a la comunidad', label: 'Remuneramos a las personas que hacen que suceda la magia de cada raíz plantada', value: 26, color: '#B4B886' },
    ];

    // Determina si el gráfico está en una pantalla pequeña (responsive)
    const isResponsive = width < 768;

    return (
        <div className="graphics-background-carbon pie-chart">
            <div style={{ height: isResponsive ? "20rem" : "100%", width: "100%" }}>
                <ResponsivePie
                    data={data}
                    margin={{ top: isResponsive ? 10 : 60, right: isResponsive ? 10 : 100, bottom: isResponsive ? 10 : 100, left: isResponsive ? 10 : 100 }}
                    innerRadius={0} // Hace que el gráfico sea más pequeño
                    padAngle={0.7}
                    cornerRadius={7}
                    activeOuterRadiusOffset={5}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    colorBy="id"
                    colors={data.map((d) => d.color)} // Aquí aplicamos los colores personalizados
                    arcLabel={(d) => `${d.value}%`} // Formatear los valores como porcentaje
                    isInteractive={true} // Mantiene la interactividad para el tooltip
                    theme={{
                        tooltip: {
                            container: {
                                background: '#333',
                                color: 'white',
                            },
                        },
                        labels: {
                            text: {
                                fill: 'white', // Establece el color de las etiquetas en blanco
                                fontSize: isResponsive ? 15 : 18,
                                // display: isResponsive ? 'none' : 'block', // Oculta los labels en responsive
                            },
                        },
                    }}
                    onClick={(data) => setSelectedValue(data)}
                    // enableArcLabels={!isResponsive} // No mostrar los labels de los segmentos en pantallas pequeñas
                    enableArcLinkLabels={!isResponsive} // No mostrar las líneas de conexión en pantallas pequeñas
                    tooltipFormat={isResponsive ? null : undefined} // Deshabilitar tooltips en responsive si no es clickeado
                    startAngle={90}
                    endAngle={450}
                    tooltip={({ datum }) => (
                        <div
                            style={{
                                background: '#333',
                                color: 'white',
                                padding: '6px 10px',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                maxWidth: '40vw', // Máximo 80% del ancho de la pantalla
                                whiteSpace: 'normal', // Permite saltos de línea
                                wordWrap: 'break-word', // Asegura que el texto no cause desbordamiento
                                overflow: 'hidden', // Evita que se expanda demasiado
                            }}
                        >
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    backgroundColor: datum.color,
                                    marginRight: 8,
                                    borderRadius: 3,
                                }}
                            />
                            {isResponsive ? datum.id : datum.label}
                        </div>
                    )}
                />
            </div>
            {
                isResponsive && selectedValue &&
                <div
                    style={{
                        color: 'white',
                        padding: '6px',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    <div
                        style={{
                            width: '10%',
                            height: 15,
                            backgroundColor: selectedValue.color,
                            marginRight: 8,
                            borderRadius: 3,
                        }}
                    />
                    {selectedValue.label} ({selectedValue.value}%)
                </div>
            }
        </div>
    );
};

export default GraphicPie;
