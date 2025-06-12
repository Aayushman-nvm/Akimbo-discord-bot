import { config } from "dotenv";
import { Client, GatewayIntentBits, Events } from "discord.js";
import { commandHandler } from "./Handlers/commandHandler.js";

config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;
  if (
    message.content.toLowerCase() === "hi black" ||
    message.content.toLowerCase() === "hi akimbo"
  ) {
    message.reply("Hello, I’m Akimbo,Black v2...A bot made by White");
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.commandName;
  console.log(`Received command: ${command}`);

  if (!command) {
    console.error(`❌ Command ${interaction.commandName} not found.`);
    return;
  }

  try {
    await commandHandler(command, interaction);
  } catch (error) {
    console.error(`❌ Error executing command ${command}\n`, error);
    await interaction.reply(
      `❌ An error occurred while executing the command: ${error.message}`
    );
  }
});

client.login(process.env.BOT_TOKEN);
