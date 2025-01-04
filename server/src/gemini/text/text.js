import { model } from "../model.js";

export async function text(prompt) {
  const { response } = await model.generateContent(prompt);
  console.log(response.usageMetadata);
  return response.text();
}
