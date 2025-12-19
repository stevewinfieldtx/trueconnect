
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (prompt: string) => {
  if (!API_KEY) return "AI services are currently unavailable.";
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating AI response.";
  }
};

export const getCompatibilitySnippet = async (userBio: string, matchBio: string) => {
  const prompt = `Act as a relationship expert for the TrueConnect dating app. 
  Given these two bios, generate a one-sentence "Compatibility" snippet (under 20 words) 
  that highlights a common interest or complementary personality trait.
  User Bio: "${userBio}"
  Match Bio: "${matchBio}"`;
  
  return getGeminiResponse(prompt);
};

export const translateMessage = async (text: string, targetLang: string) => {
  const prompt = `Translate the following message to ${targetLang}. 
  Provide ONLY the translated text, no explanation.
  Message: "${text}"`;
  
  return getGeminiResponse(prompt);
};
