import { text } from "../../gemini/text/text.js";

export const chat = async (req, res) => {
  const { message } = req.body;

  try {
    const AI_Response = await text(message);
    return res.status(200).json({ status: "success", response: AI_Response });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", error: "Internal server error" });
  }
};
