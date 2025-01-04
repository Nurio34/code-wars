import { text } from "@/actions/text";
import { textAndImage } from "@/actions/textAndImage";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addMessage, updateThinkingWithMessage } from "@/store/slices/chat";
import { useActionState, useEffect } from "react";

type Props = { page: string };
function MessageAreaClient({ page }: Props) {
  const [state, formAction] = useActionState(
    page === "chat" ? text : textAndImage,
    ""
  );

  const messages = useAppSelector((s) => s.chat.messages);
  console.log(messages);
  const id = messages.length + 1;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state) {
      const aiMessage = {
        id: id - 1,
        content: state,
        sender: "ai" as "user" | "ai",
        timestamp: new Date().toISOString(),
      };
      dispatch(updateThinkingWithMessage(aiMessage));
    }
  }, [state, dispatch, id]);

  function handleMessage(formData: FormData) {
    const message = formData.get("message") as string;
    dispatch(
      addMessage({
        id: id,
        content: message,
        sender: "user" as "user" | "ai",
        timestamp: new Date().toISOString(),
      })
    );
  }

  function handleThinking() {
    const aiMessage = {
      id: id + 1,
      content: "Thinking",
      sender: "ai" as "user" | "ai",
      timestamp: new Date().toISOString(),
    };
    dispatch(addMessage(aiMessage));
  }

  return (
    <form
      action={async (formData) => {
        handleMessage(formData);
        handleThinking();
        formAction(formData);
      }}
      className="flex items-center gap-x-[1vw]"
    >
      <textarea
        className="grow textarea textarea-bordered resize-none"
        style={{ scrollbarWidth: "none" }}
        name="message"
        rows={1}
        onChange={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
export default MessageAreaClient;
