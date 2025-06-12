//holds function that give the main response
import { config } from "dotenv";
config();
import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.GEMINI_API;

const ai = new GoogleGenAI({ apiKey: `${apiKey}` });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt}`,
    config: {
      systemInstruction: "You are a Discord bot. Your name is Akimbo.",
      maxOutputTokens: 500,
      temperature: 0.5,
    },
  });
  console.log("Main response: ", response.text);
  const text = response.text;
  return text;
}

export async function geminiServices(prompt) {
  try {
    console.log("Received prompt: ", prompt);

    const response = await main(prompt);
    console.log("Gemini response: ", response);

    return response;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content from Gemini AI");
  }
}
