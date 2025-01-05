import { model } from "../model.js";
import fs from "fs/promises";

async function textAndimageFile(imageFile, prompt) {
  try {
    const imageBuffer = await fs.readFile(imageFile.path);
    const imageBase64 = imageBuffer.toString("base64");

    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType: imageFile.mimetype,
      },
    };

    const { response } = await model.generateContent([prompt, imagePart]);
    console.log(response.usageMetadata);
    return response.text();
  } catch (error) {
    console.error("Error processing image file:", error);
    throw error;
  }
}

export { textAndimageFile };
