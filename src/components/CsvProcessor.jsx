import React from 'react';

const CsvProcessor = ({ loading, resultados }) => {
  return (
    <div>
      {loading ? (
        <p className="text-lg text-center text-gray-700">Por favor, espere mientras procesamos los datos...</p>
      ) : (
        <>
          <p className="text-lg text-center text-gray-700">Resultados: {JSON.stringify(resultados)}</p>
        </>
      )}
    </div>
  );
};

export default CsvProcessor;
