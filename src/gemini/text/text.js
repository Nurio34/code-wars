import { model } from "../model.js";

export async function text(prompt) {
  const { response } = await model.generateContent(prompt);
  return response.text();
}
