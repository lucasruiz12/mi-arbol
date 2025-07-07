import React, { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';

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

const GraphicPie = ({ carbonPoints, categoryPoints, width = '100%', height = 220 }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { width: windowWidth } = useWindowDimensions();
  const data = [
    { id: 'Vivienda', label: 'Vivienda', value: categoryPoints ? parseFloat((categoryPoints[0] / carbonPoints) * 100).toFixed(2) : 17, color: '#A4B46A' },
    { id: 'Traslados', label: 'Traslados', value: categoryPoints ? parseFloat((categoryPoints[1] / carbonPoints) * 100).toFixed(2) : 71, color: '#C8D390' },
    { id: 'Compras', label: 'Compras', value: categoryPoints ? parseFloat((categoryPoints[2] / carbonPoints) * 100).toFixed(2) : 12, color: '#C0D860' },
  ];
  const isResponsive = windowWidth < 768;
  let pieHeight = 300;
  if (windowWidth >= 2560) { pieHeight = 500; }
  else if (windowWidth >= 1200) { pieHeight = 350; }
  else if (windowWidth >= 768) { pieHeight = 250; }
  else { pieHeight = 180; }
  return (
    <>
      <div className="graphics-background-home-pie pie-chart" style={{ height: pieHeight, width: '100%' }}>
        <div style={{ height: '100%', width: '100%' }}>
          <ResponsivePie
            data={data}
            margin={{ top: isResponsive ? 10 : 30, right: isResponsive ? 10 : 40, bottom: isResponsive ? 10 : 40, left: isResponsive ? 10 : 60 }}
            innerRadius={0}
            padAngle={0.7}
            cornerRadius={7}
            activeOuterRadiusOffset={5}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            colorBy="id"
            colors={data.map((d) => d.color)}
            arcLabel={d => `${d.value}%`}
            arcLabelsTextColor="white"
            arcLabelsRadiusOffset={0.55}
            arcLinkLabelsThickness={3}
            arcLinkLabelsColor={{ from: 'color' }}
            isInteractive={true}
            theme={{
              tooltip: {
                container: {
                  background: '#333',
                  color: 'white',
                  display: isResponsive ? 'none' : 'block',
                },
              },
              labels: {
                text: {
                  fill: 'white',
                  fontSize: 14,
                },
              },
              arcLinkLabels: {
                text: {
                  fontSize: 22,
                  fontWeight: 700,
                  fill: 'white',
                },
              },
            }}
            onClick={(data) => setSelectedValue(data)}
            enableArcLinkLabels={!isResponsive}
            tooltipFormat={isResponsive ? null : undefined}
            startAngle={45}
            endAngle={405}
          />
        </div>
        {isResponsive && selectedValue &&
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
