const API_ENDPOINT = "https://api-inference.huggingface.co/models/finiteautomata";

async function query(model, data) {
  try {
    const response = await fetch(`${API_ENDPOINT}/${model}`, {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Error al enviar la solicitud:", error);
  }
}

export { query };
