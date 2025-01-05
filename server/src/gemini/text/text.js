import { model } from "../model.js";

export async function text(prompt, historyArray) {
  const history = historyArray.map((item) => {
    return {
      role: item.sender,
      parts: [{ text: item.content }],
    };
  });
  const chat = model.startChat({
    history: history,
  });
  const { response } = await chat.sendMessage(prompt);
  console.log(response.usageMetadata);
  return response.text();
}
