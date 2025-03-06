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

const GraphicPie = ({ carbonPoints, categoryPoints }) => {

  const [selectedValue, setSelectedValue] = useState("");

  const { width } = useWindowDimensions(); // Obtiene el ancho de la ventana

  const data = [
    { id: 'Vivienda', label: 'Vivienda', value: categoryPoints ? parseFloat((categoryPoints[0] / carbonPoints) * 100).toFixed(2) : 17, color: '#A4B46A' },
    { id: 'Traslados', label: 'Traslados', value: categoryPoints ? parseFloat((categoryPoints[1] / carbonPoints) * 100).toFixed(2) : 71, color: '#C8D390' },
    { id: 'Compras', label: 'Compras', value: categoryPoints ? parseFloat((categoryPoints[2] / carbonPoints) * 100).toFixed(2) : 12, color: '#C0D860' },
  ];

  // Determina si el gráfico está en una pantalla pequeña (responsive)
  const isResponsive = width < 768;

  return (
    <>
      <h2 style={{ color: 'white' }}>Análisis de consumo</h2>
      <div className="graphics-background-home pie-chart">
        <div style={{ height: "100%", width: "100%" }}>
          <ResponsivePie
            data={data}
            margin={{ top: isResponsive ? 10 : 30, right: isResponsive ? 10 : 40, bottom: isResponsive ? 10 : 40, left: isResponsive ? 10 : 60 }}
            innerRadius={0} // Hace que el gráfico sea más pequeño
            padAngle={0.7}
            cornerRadius={7}
            activeOuterRadiusOffset={5}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            colorBy="id"
            colors={data.map((d) => d.color)} // Aquí aplicamos los colores personalizados
            arcLabel={(d) => `${d.value}%`} // Formatear los valores como porcentaje
            arcLabelsRadiusOffset={0.65}
            isInteractive={true} // Mantiene la interactividad para el tooltip
            theme={{
              tooltip: {
                container: {
                  background: '#333',
                  color: 'white',
                  display: isResponsive ? 'none' : 'block', // Oculta los labels en responsive
                },
              },
              labels: {
                text: {
                  fill: 'white', // Establece el color de las etiquetas en blanco
                  fontSize: 22.5,
                },
              },
            }}
            onClick={(data) => setSelectedValue(data)}
            // enableArcLabels={!isResponsive} // No mostrar los labels de los segmentos en pantallas pequeñas
            enableArcLinkLabels={!isResponsive} // No mostrar las líneas de conexión en pantallas pequeñas
            tooltipFormat={isResponsive ? null : undefined} // Deshabilitar tooltips en responsive si no es clickeado
            startAngle={45}
            endAngle={405}
          />
        </div>
        {
          isResponsive && selectedValue &&
          <div
            style={{
              color: 'white',
              padding: '6px 10px',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: selectedValue.color,
                marginRight: 8,
                borderRadius: 3,
              }}
            />
            {selectedValue.label} ({selectedValue.value}%)
          </div>
        }
      </div>
    </>
  );
};

export default GraphicPie;
