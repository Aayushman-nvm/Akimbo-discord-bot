import { ChannelContext } from "../Models/channelContext.js";

export async function saveContext(channelID, role, content) {
  const update = {
    $push: {
      messages: {
        role: role,
        content: content,
        timestamp: new Date(),
      },
    },
    $set: {
      updatedAt: new Date(),
    },
  };
  await ChannelContext.findOneAndUpdate({ channelID }, update, {
    upsert: true,
    new: true,
  });
}

export async function getContext(channelID) {
  const context = await ChannelContext.findOne({ channelID });
  if (!context) return [];
  return context.messages.slice(-6);
}

export async function clearContext(channelID) {
  await ChannelContext.deleteOne({ channelID });
}
