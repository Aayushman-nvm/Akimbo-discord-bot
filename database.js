import mongoose from "mongoose";
import { config } from "dotenv";
config();

const dburl = process.env.DB_URL;

export async function connectDB() {
  try {
    await mongoose.connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ connected to database");
  } catch (error) {
    console.log("DB url: ", dburl);
    console.error("❌ Error connecting to database: ", error);
    process.exit(1);
  }
}
