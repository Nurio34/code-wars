import { model } from "../model.js";

async function textAndimage(imageUrl, prompt) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch image");
    }

    const imageBuffer = await res.arrayBuffer();
    const mimeType = res.headers.get("content-type");

    const imagePart = {
      inlineData: {
        data: Buffer.from(imageBuffer).toString("base64"),
        mimeType: mimeType,
      },
    };

    const { response } = await model.generateContent([prompt, imagePart]);
    console.log(response.usageMetadata);
    return response.text();
  } catch (error) {
    console.error("Error processing image URL:", error);
    throw error;
  }
}

export { textAndimage };
