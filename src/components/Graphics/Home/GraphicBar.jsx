import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Personal',
    Exceso: 2800,
    Ideal: 2000,
  },
  {
    name: 'Mundial',
    Exceso: 1800,
    Ideal: 2000,
  },
  {
    name: 'México',
    Exceso: 1600,
    Ideal: 2000,
  },
];

const GraphicBar = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          // left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="white" strokeDasharray="3 3" />
        <XAxis stroke="white" dataKey="name" />
        <YAxis stroke="white" />
        <Tooltip />
        <Legend
          formatter={(value) => {
            // Divide las etiquetas largas en líneas más cortas
            if (value === 'Consumo personal') return 'Consumo\nPersonal';
            if (value === 'Promedio mundial') return 'Promedio\nMundial';
            if (value === 'Promedio en México') return 'Promedio\nen México';
            return value;
          }}
          wrapperStyle={{
            whiteSpace: 'pre-wrap', // Permite que el salto de línea funcione
            textAlign: 'center', // Centra las líneas
          }}
        />
        <Bar dataKey="Ideal" stackId="a" fill="#66BB6A" />
        <Bar dataKey="Exceso" stackId="a" fill="#8D6E63" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphicBar;
