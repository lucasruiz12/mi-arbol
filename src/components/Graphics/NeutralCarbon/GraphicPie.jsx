import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';

const data = [
  {
    name: 'Coordinación',
    fullName: 'Coordinación de nuestras reforestaciones',
    value: 8,
    description: 'Pago transmitido al equipo responsable de preparar las actividades y dar servicio a la plataforma',
    color: '#8BB174',
  },
  {
    name: 'Pago a la comunidad',
    fullName: 'Pago justo a la comunidad que nos ayuda a reforestar',
    value: 26,
    description: 'Remuneramos a las personas que hacen que suceda la magia de cada raíz plantada',
    color: '#B4B886',
  },
  {
    name: 'Mantenimiento',
    fullName: 'Mantenimiento de nuestros árboles',
    value: 10,
    description: 'Cuidamos que tus raíces lleguen alto, vigilándolas los primeros 3 años después de ser plantadas',
    color: '#D6CBB2',
  },
  {
    name: 'Plantula de pino',
    fullName: 'Plantula de pino a reforestar',
    value: 27,
    description: 'Plantamos plantillas de invernadero garantizando la calidad de cada raíz',
    color: '#C0D860',
  },
  {
    name: 'Programación',
    fullName: 'Programación y mantenimiento de nuestra comunidad',
    value: 6,
    description: 'Ayudamos a mantener la comunidad en servicio con actualizaciones manejando licencias y operaciones web',
    color: '#F4D06F',
  },
  {
    name: 'Comunicación',
    fullName: 'Comunicación y expansión del proyecto',
    value: 8,
    description: 'Importante para que llegues a conocer de nosotros y juntos mitiguemos CO2e',
    color: '#A4B46A',
  },
  {
    name: 'Ingeniería forestal',
    fullName: 'Ingeniería forestal',
    value: 15,
    description: 'Una parte va destinada a biólogos, agrónomos e ingenieros forestales que validan nuestras superficies',
    color: '#C8D390',
  },
];

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const { fullName, value, description, color } = payload[0].payload;
    return (
      <div
        style={{
          background: '#333',
          color: 'white',
          padding: 10,
          borderRadius: 6,
          maxWidth: 300,
          whiteSpace: 'normal',
          wordWrap: 'break-word',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: color,
              marginRight: 8,
              borderRadius: 2,
            }}
          />
          <strong>{fullName} ({value}%)</strong>
        </div>
        <div style={{ fontSize: 14 }}>{description}</div>
      </div>
    );
  }
  return null;
};

const GraphicPieRecharts = () => {
  const { width } = useWindowDimensions();
  const isResponsive = width < 768;

  const renderLabelLine = ({ cx, cy, midAngle, outerRadius }) => {
    const RADIAN = Math.PI / 180;
    const startRadius = outerRadius;
    const endRadius = outerRadius + 30;
    const sx = cx + startRadius * Math.cos(-midAngle * RADIAN);
    const sy = cy + startRadius * Math.sin(-midAngle * RADIAN);
    const ex = cx + endRadius * Math.cos(-midAngle * RADIAN);
    const ey = cy + endRadius * Math.sin(-midAngle * RADIAN);

    return (
      <path
        d={`M${sx},${sy}L${ex},${ey}`}
        stroke="#fff"
        strokeWidth={2}
        fill="none"
      />
    );
  };

  return (
    <div style={{ width: '100%', height: isResponsive ? 300 : 500 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={isResponsive ? false : renderLabelLine}
            outerRadius={isResponsive ? 70 : 150}
            cornerRadius={6}
            dataKey="value"
            label={
              isResponsive
                ? null
                : ({ cx, cy, midAngle, outerRadius, fullName, value }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = outerRadius + 50;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    const anchor = x > cx ? 'start' : 'end';
                    const maxCharsPerLine = 25;
                    const lines = [];
                    let currentLine = '';
                    fullName.split(' ').forEach((word) => {
                      if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
                        currentLine += ' ' + word;
                      } else {
                        lines.push(currentLine.trim());
                        currentLine = word;
                      }
                    });
                    if (currentLine) lines.push(currentLine.trim());

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor={anchor}
                        dominantBaseline="central"
                        style={{ fontSize: 18 }}
                      >
                        {lines.map((line, i) => (
                          <tspan key={i} x={x} dy={i === 0 ? 0 : '1.2em'}>
                            {i === lines.length - 1 ? `${line} (${value}%)` : line}
                          </tspan>
                        ))}
                      </text>
                    );
                  }
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            {!isResponsive && (
              <LabelList dataKey="value" position="inside" fill="white" formatter={(value) => `${value}%`} />
            )}
          </Pie>
          <Tooltip content={isResponsive ? null : <CustomTooltip />} />
          {isResponsive && (
            <Legend
              layout="vertical"
              verticalAlign="bottom"
              height={60}
              formatter={(value, entry) => `${entry.payload.name} (${entry.payload.value}%)`}
              wrapperStyle={{
                fontSize: 12,
                color: 'white',
                paddingTop: 10,
              }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicPieRecharts;