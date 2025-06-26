# 🤖 Discord Bot with Gemini AI

Hey there!  
This is a simple but expanding Discord bot project where the goal is to create a **multi-service bot**—starting with Google’s Gemini AI. You can chat with it, ask questions, get info mid-convo, and even store context per channel so each channel conversation stays nice and tidy.

---

## 🛠️ Tech Stack

- [discord.js](https://discord.js.org/) — for Discord interactions  
- [@google/genai](https://www.npmjs.com/package/@google/genai) — to talk to Gemini AI  
- [mongoose](https://mongoosejs.com/) — for MongoDB context storage  
- [dotenv](https://www.npmjs.com/package/dotenv) — for managing environment variables  

---

## 🚀 Features (So Far)

-  Chat with Gemini using slash commands  
-  Context-based memory (stored per channel) so you can have unique convos in each channel  
-  Mid-convo fact checks and response transparency planned  
-  Modular service-based structure for easy expansion  

---

## 🧪 Run Locally

Make sure you have **Node.js** and **MongoDB** set up on your machine. Then follow these steps:

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/discord-bot.git
cd discord-bot
```

2. **Install dependencies**

``` 
npm install
```

3. **Set up your `.env` file**

```env 
DISCORD_TOKEN=your_discord_token
MONGO_URI=your_mongo_connection_string
GOOGLE_API_KEY=your_genai_api_key
```

4. **Start the bot**

``` 
npm start
```
---

## 📌 Roadmap (What’s Cooking)

- Better formatting for Gemini’s responses (images, links, videos)  
- Add support for other services (weather, code interpreter, etc.)  
- Session control: reset, export, or pin chats  
- Cooldown and spam control features  

---

## 👨‍💻 Author

Built by **Aayushman** — for fun, learning, and automation  
Feel free to fork it, play with it, or open a PR!

---

## 📜 License

**ISC** – do whatever you want, just be cool about it.
