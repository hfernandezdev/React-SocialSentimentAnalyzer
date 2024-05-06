import React, { useState } from "react";
import { query } from "../services/huggingFaceService";
import { Link } from 'react-router-dom';

//text analysis
function TextAnalysisPage() {
    const [text, setText] = useState("");
    const [emotionResult, setEmotionResult] = useState([]);
    const [sentimentResult, setSentimentResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const handleAnalysis = async () => {
        setLoading(true);
        setError(null);
        try {
            const emotionResponse = await query("beto-emotion-analysis", { "inputs": text });
            const sentimentResponse = await query("beto-sentiment-analysis", { "inputs": text });
            setEmotionResult(emotionResponse[0]);
            setSentimentResult(sentimentResponse[0]);
        } catch (error) {
            setError("Error al realizar el análisis.");
        } finally {
            setLoading(false);
        }
    };

    return (
      <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex items-center justify-center">
        <div className="max-w-3xl px-8 py-12 bg-white shadow-xl rounded-lg">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Análisis de Sentimientos y Emociones</h2>
          <textarea
            className="w-full h-32 p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Escribe aquí el texto para analizar"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {error && <p className="text-red-500">{error}</p>}
          {emotionResult.length > 0 && sentimentResult.length > 0 && (
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Resultados de Emoción:</h3>
                <ul>
                  {emotionResult.map((result, index) => (
                    <li key={index} className="text-lg text-gray-800">
                      {etiquetasTraducidas[result.label]}: {result.score.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Resultados de Sentimiento:</h3>
                <ul>
                  {sentimentResult.map((result, index) => (
                    <li key={index} className="text-lg text-gray-800">
                      {etiquetasTraducidas[result.label]}: {result.score.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="flex justify-center mt-6">
            <Link
              to="/inicio"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out mr-2"
            >
              Volver
            </Link>

            <button
              className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleAnalysis}
              disabled={loading}
            >
              {loading ? 'Analizando...' : 'Analizar'}
            </button>
          </div>
        </div>
      </div>
    );
}

export default TextAnalysisPage;
