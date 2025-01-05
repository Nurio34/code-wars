"use server";
export const streamChat = async (currentState: string, formData: FormData) => {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/gemini/stream-chat`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.status === "success") {
      return data.response;
    }
  } catch (error) {
    console.error(error);
    return "Internal server error";
  }
};
