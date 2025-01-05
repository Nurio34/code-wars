import { model } from "../model.js";

export async function stream(prompt, res) {
  // Set headers for streaming
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const result = await model.generateContentStream(prompt);

  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    // Send chunk to client using Server-Sent Events format
    res.write(`data: ${chunkText}\n\n`);
  }

  // End the stream
  res.end();
}
