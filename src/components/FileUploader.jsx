import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 1) {
      const file = acceptedFiles[0];
      onFileUpload(file);
    } else {
      alert('Por favor, seleccione un solo archivo CSV.');
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'text/csv': ['.csv']} });

  return (
    <>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <div className="border border-gray-300 rounded-lg p-6 mb-4">
          <p className="text-gray-400">Arrastre y suelte un archivo CSV aquí, o haga clic para seleccionar uno.</p>
        </div>
      </div>
    </>
  );
};

export default FileUploader;
