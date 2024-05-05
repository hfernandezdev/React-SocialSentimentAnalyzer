import React, { useState, useEffect } from 'react';
import CsvProcessor from '../components/CsvProcessor';
import { Link, useLocation } from 'react-router-dom';

const ProcessDataPage = () => {
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState(null);
  const location = useLocation();
  const archivo = location.state?.archivo;

  useEffect(() => {
    setTimeout(() => {
      const resultadosSimulados = { /* resultados de procesamiento */ };
      setResultados(resultadosSimulados);
      setLoading(false);
    }, 2000);
  }, [archivo]);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Resultados del Procesamiento</h2>
        <CsvProcessor loading={loading} resultados={resultados} />
        <div className="flex justify-center mt-8">
          <Link to="/cargar-archivo-csv" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out mr-2">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessDataPage;
