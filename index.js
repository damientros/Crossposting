import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = "TOKEN_ICI";
const ANNOUNCEMENT_CHANNEL_ID = "CHANNEL_ID_ICI";

client.on("clientReady", () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.id === client.user.id) return;

  if (message.channel.id === ANNOUNCEMENT_CHANNEL_ID) {
    try {
      await message.crosspost();
      console.log("Annonce publiée automatiquement !");
    } catch (err) {
      console.error("Erreur lors de la publication :", err);
    }
  }
});

client.login(TOKEN);
