import { stream } from "../../gemini/text/stream.js";

export const streamChat = async (req, res) => {
  const { message } = req.body;
  try {
    const result = await stream(message, res);
    return res.status(200).json({ status: "success", response: result });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", error: "Internal server error" });
  }
};
