"use server";

export const text = async (currentState: string, formData: FormData) => {
  const message = formData.get("message");

  try {
    const res = await fetch(`${process.env.SERVER_URL}/gemini/chat`, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
      },
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
