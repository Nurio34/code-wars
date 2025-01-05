import { chat } from "@/actions/chat";
import { streamChat } from "@/actions/streamChat";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addMessage, updateThinkingWithMessage } from "@/store/slices/chat";
import { useActionState, useEffect } from "react";
import { FcAddImage } from "react-icons/fc";
import SubmitButton from "./SubmitButton";
import { useFormStatus } from "react-dom";
import TextArea from "./TextArea";

type Props = { page: string };

function MessageAreaClient({ page }: Props) {
  const messages = useAppSelector((s) => s.chat.messages);
  const id = messages.length + 1;
  const dispatch = useAppDispatch();

  const action = page === "chat" ? chat : streamChat;
  const [state, formAction] = useActionState(action, "");

  useEffect(() => {
    if (state) {
      const aiMessage = {
        id: id - 1,
        content: state,
        sender: "model" as "user" | "model",
        timestamp: new Date().toISOString(),
      };
      dispatch(updateThinkingWithMessage(aiMessage));
    }
  }, [state, dispatch]);

  function handleMessage(formData: FormData) {
    const message = formData.get("message") as string;

    dispatch(
      addMessage({
        id: id,
        content: message,
        sender: "user" as "user" | "model",
        timestamp: new Date().toISOString(),
      })
    );
  }

  function handleThinking() {
    const aiMessage = {
      id: id + 1,
      content: "Thinking",
      sender: "model" as "user" | "model",
      timestamp: new Date().toISOString(),
    };
    dispatch(addMessage(aiMessage));
  }

  return (
    <form
      action={async (formData) => {
        try {
          handleMessage(formData);
          handleThinking();
          formAction(formData);
        } catch (error) {
          console.error("Form submission error:", error);
        }
      }}
    >
      <div className="border-2 flex items-end gap-x-4 py-[1vh] px-[1vw] rounded-lg">
        <label htmlFor="image">
          <FcAddImage size={32} />
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            accept="image/*"
          />
        </label>
        <TextArea />
        <input
          type="hidden"
          name="historyString"
          value={JSON.stringify(messages)}
        />
        <SubmitButton />
      </div>
    </form>
  );
}
export default MessageAreaClient;
