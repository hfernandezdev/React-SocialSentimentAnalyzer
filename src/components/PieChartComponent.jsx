import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const PieChartComponent = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const etiquetasTraducidas = {
    joy: "Alegría",
    sadness: "Tristeza",
    surprise: "Sorpresa",
    fear: "Miedo",
    disgust: "Asco",
    anger: "Enojo",
    others: "Otros",
    POS: "Positivo",
    NEG: "Negativo",
    NEU: "Neutral"
  };

  if (data && data.length > 0) {

    const dataForPieChart = data.map(item => ({
      name: etiquetasTraducidas[item.label],
      value: item.score.toFixed(2) * 100
    }));

    return (
      <div className="w-full flex justify-center">
        <div className="max-w-xl">
          <h3 className="text-xl font-semibold mb-4 text-center">Gráfico de Torta para Sentimientos:</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={dataForPieChart}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {dataForPieChart.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    );
  } else {
    return <p>No hay datos de sentimiento disponibles.</p>;
  }
};

export default PieChartComponent;
