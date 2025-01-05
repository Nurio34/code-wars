import { text } from "../../gemini/text/text.js";
import { textAndimageFile } from "../../gemini/text/textAndImageFile.js";
import { textAndimageUrl } from "../../gemini/text/textAndimageUrl.js";

export const chat = async (req, res) => {
  const { message, historyString } = req.body;
  const historyArray = JSON.parse(historyString);
  const imageUrl = message.split("__")[1];
  const imageFile = req.file;
  try {
    let AI_Response;
    if (imageFile.size) {
      AI_Response = await textAndimageFile(imageFile, message);
    } else if (imageUrl && imageUrl.includes("http")) {
      AI_Response = await textAndimageUrl(imageUrl, message);
    } else {
      AI_Response = await text(message, historyArray);
    }
    return res.status(200).json({ status: "success", response: AI_Response });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", error: "Internal server error" });
  }
};
