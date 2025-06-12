import { config } from "dotenv";
import { REST, Routes } from "discord.js";
import { gemini as geminiCommand } from "../Commands/geminiCommands.js";

config();

const commands = [geminiCommand.toJSON()];

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

try {
  console.log("⏳ Registering commands...");
  await rest.put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
    ),
    { body: commands }
  );
  console.log("✅ Registered slash commands successfully.");
} catch (err) {
  console.error("❌ Failed to register:", err);
}
