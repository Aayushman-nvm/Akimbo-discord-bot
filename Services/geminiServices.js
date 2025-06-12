//holds function that give the main response
import { config } from "dotenv";
config();
import { GoogleGenAI } from "@google/genai";
import { getContext, saveContext } from "./contextServices.js";

const apiKey = process.env.GEMINI_API;

const ai = new GoogleGenAI({ apiKey: `${apiKey}` });

async function main(chatHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: chatHistory,
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

export async function geminiServices(prompt, channelID) {
  const history = await getContext(channelID);

  const chatHistory = history.map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));

  chatHistory.push({
    role: "user",
    parts: [{ text: prompt }],
  });

  try {
    console.log("Received prompt: ", prompt);

    const response = await main(chatHistory);
    console.log("Gemini response: ", response);

    saveContext(channelID, "user", prompt);
    saveContext(channelID, "model", response);

    return response;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content from Gemini AI");
  }
}
