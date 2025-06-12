//will store commands to triger gemini
import { SlashCommandBuilder } from "discord.js";
import { geminiServices } from "../Services/geminiServices.js";
import { formatResponse } from "../Utils/formatResponse.js";

export const gemini = new SlashCommandBuilder()
  .setName("gemini")
  .setDescription("Interact with Gemini AI")
  .addStringOption((option) =>
    option
      .setName("prompt")
      .setDescription("Prompt thats sent to Gemini")
      .setRequired(true)
  );

export async function askGemini(interaction) {
  const prompt = interaction.options.getString("prompt");
  console.log(`Gemini Prompt: ${prompt}`);

  try {
    await interaction.deferReply();

    await interaction.followUp(`Prompt by ${interaction.user}: ${prompt}\n`);

    const response = await geminiServices(prompt, interaction.channelId);
    console.log(`Gemini Response: ${response}`);

    const formatted = formatResponse(response);
    console.log(`Gemini Formatted Response: ${formatted}`);

    await interaction.followUp(formatted);
  } catch (error) {
    console.error("❌ Error in askGemini:", error);
    await interaction.followUp("❌ Failed to get a response from Gemini.");
  }
}
