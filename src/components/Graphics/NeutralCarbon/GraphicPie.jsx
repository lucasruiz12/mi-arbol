import React, { useState, useEffect } from 'react';
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, Sector,
    Label,
    LabelList
} from 'recharts';

const data = [
    {
        name: 'Coordinación de nuestras reforestaciones',
        value: 8,
        description: 'Pago transmitido al equipo responsable de preparar las actividades y dar servicio a la plataforma',
        color: '#8BB174',
    },
    {
        name: 'Pago justo a la comunidad que nos ayuda a reforestar',
        value: 26,
        description: 'Remuneramos a las personas que hacen que suceda la magia de cada raíz plantada',
        color: '#B4B886',
    },
    {
        name: 'Mantenimiento de nuestros árboles',
        value: 10,
        description: 'Cuidamos que tus raíces lleguen alto, vigilándolas los primeros 3 años después de ser plantadas',
        color: '#D6CBB2',
    },
    {
        name: 'Plantula de pino a reforestar',
        value: 27,
        description: 'Plantamos plantillas de invernadero garantizando la calidad de cada raíz',
        color: '#C0D860',
    },
    {
        name: 'Programación y mantenimiento de nuestra comunidad',
        value: 6,
        description: 'Ayudamos a mantener la comunidad en servicio con actualizaciones manejando licencias y operaciones web',
        color: '#F4D06F',
    },
    {
        name: 'Comunicación y expansión del proyecto',
        value: 8,
        description: 'Importante para que llegues a conocer de nosotros y juntos mitiguemos CO2e',
        color: '#A4B46A',
    },
    {
        name: 'Ingeniería forestal',
        value: 15,
        description: 'Una parte va destinada a biólogos, agrónomos e ingenieros forestales que validan nuestras superficies',
        color: '#C8D390',
    },
];

// Hook para responsive
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
        const { name, value, description, color } = payload[0].payload;
        return (
            <div style={{
                background: '#333',
                color: 'white',
                padding: 10,
                borderRadius: 6,
                maxWidth: 300,
                whiteSpace: 'normal',
                wordWrap: 'break-word',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 6
                }}>
                    <div style={{
                        width: 12,
                        height: 12,
                        backgroundColor: color,
                        marginRight: 8,
                        borderRadius: 2
                    }} />
                    <strong>{name} ({value}%)</strong>
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
        const endRadius = outerRadius + 30; // Más largo
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
                        // labelLine={!isResponsive}
                        labelLine={isResponsive ? false : { strokeWidth: 4 }}
                        labelRadius={isResponsive ? 90 : 250}
                        outerRadius={isResponsive ? 80 : 150}
                        cornerRadius={6}
                        dataKey="value"
                        label={({ cx, cy, midAngle, outerRadius, name, value }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = outerRadius + 50;
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                            const anchor = x > cx ? "start" : "end";

                            // 👇 División de texto si es muy largo
                            const maxCharsPerLine = 25;
                            const lines = [];

                            let currentLine = '';
                            name.split(' ').forEach(word => {
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
                                        <tspan key={i} x={x} dy={i === 0 ? 0 : "1.2em"}>
                                            {i === lines.length - 1 ? `${line} (${value}%)` : line}
                                        </tspan>
                                    ))}
                                </text>
                            );
                        }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        <LabelList
                            dataKey="value"
                            position="inside"
                            fill="white"
                            formatter={(value) => `${value}%`}
                        />
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    {isResponsive && (
                        <Legend
                            verticalAlign="bottom"
                            height={80}
                            wrapperStyle={{
                                fontSize: 14,
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
