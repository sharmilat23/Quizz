import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY, // from .env
});

export async function getQuizQuestions(topic, difficulty, count) {
  const prompt = `You are a quiz question generator.
Generate ${count} multiple-choice questions on the topic "${topic}" at "${difficulty}" level.

Each question should have:
- "question": The question text.
- "options": 4 unique answer options.
- "answer": The correct answer (must match one of the options).

Return ONLY in JSON format like this:
[
  {
    "question": "What is the capital of France?",
    "options": ["Paris", "London", "Rome", "Berlin"],
    "answer": "Paris"
  }
]`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    console.log("Full Gemini Response:", response);

    // Extract text safely
    const rawText = response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const cleaned = rawText.replace(/```json|```/g, "").trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Error fetching Gemini quiz questions:", error);
    return [];
  }
}
