import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../components/FileUploader';

const LoadCSVFilePage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleProcessing = () => {
    if (file) {
      navigate('/procesar-datos', { state: { archivo: file } });
    } else {
      alert('Por favor, seleccione un archivo CSV.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Cargar Archivo CSV</h2>
        <FileUploader onFileUpload={handleFileUpload} />
        {!file && (
          <div className="flex justify-center mt-4">
            <button onClick={() => navigate('/inicio')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out mr-2">
              Volver
            </button>
          </div>
        )}
        {file && (
          <div className="mt-6">
            <p className="text-lg text-center text-gray-700 mb-2">Archivo cargado:</p>
            <p className="text-center font-semibold">{file.name} - {file.size} bytes</p>
            <div className="flex justify-center mt-6">
              <button onClick={() => navigate('/inicio')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out mr-2">
                Volver
              </button>
              <button onClick={handleProcessing} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out">
                Procesar Datos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadCSVFilePage;
