import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const COLORS = ['#C0D860', '#A4B46A'];

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [resizeKey, setResizeKey] = useState(0);
  
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setResizeKey(prev => prev + 1);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { width, resizeKey };
}

const GraphicBarRecharts = ({ carbonPoints }) => {
  const { width, resizeKey } = useWindowWidth();
  
  console.log('GraphicBarRecharts render - width:', width, 'carbonPoints:', carbonPoints, 'resizeKey:', resizeKey);
  
  // Resoluciones estándar simplificadas
  let containerWidth = '100%';
  
  if (width >= 2560) {
    // 4K
    containerWidth = 600;
  } else if (width >= 1024) {
    // Laptop
    containerWidth = '100%';
  } else if (width >= 768) {
    // Tablet
    containerWidth = '100%';
  } else {
    // Móvil
    containerWidth = '100%';
  }

  const axisFontSize = width < 768 ? 10 : 14;
  const labelFontSize = width < 768 ? 12 : 16;

  const data = [
    {
      name: 'Tu impacto',
      value: Number(carbonPoints),
      fill: COLORS[0],
    },
    {
      name: 'Persona promedio',
      value: 9.45,
      fill: COLORS[1],
    },
  ];

  console.log('GraphicBarRecharts data:', data, 'containerWidth:', containerWidth);

  return (
    <div className="bar-chart-center">
      <ResponsiveContainer key={resizeKey} width={containerWidth} height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barCategoryGap={40}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: axisFontSize, fill: '#fff' }} />
          <YAxis tick={{ fontSize: axisFontSize, fill: '#fff' }} />
          <Tooltip />
          <Bar dataKey="value" isAnimationActive fill={COLORS[0]} barSize={40}>
            <LabelList dataKey="value" position="top" fill="#fff" fontSize={labelFontSize} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicBarRecharts; 