import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  role: { type: String, enum: ["user", "model"], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const channelContextSchema = new mongoose.Schema({
  channelID: { type: String, required: true, unique: true },
  messages: { type: [messageSchema], default: [] },
  updatedAt: { type: Date, default: Date.now },
});

export const ChannelContext = mongoose.model(
  "ChannelContext",
  channelContextSchema
);
