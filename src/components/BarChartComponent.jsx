import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = ({ data }) => {

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

    const dataForBarChart = data.map(item => ({
      name: etiquetasTraducidas[item.label],
      value: item.score.toFixed(2) * 100
    }));

    return (
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4">Gráfico de Barras para Emociones:</h3>
        <BarChart width={600} height={300} data={dataForBarChart} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    );

  } else {
    return <p>No hay datos de emoción disponibles.</p>;
  }
};

export default BarChartComponent;
