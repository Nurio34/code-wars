import { useAppSelector } from "@/store/hooks";
import { useEffect, useRef } from "react";
import "./index.css";

type Props = {
  page: string;
};
const ChatScreenClient = ({ page }: Props) => {
  console.log(page);
  const messages = useAppSelector((s) => s.chat.messages);
  const lastMessageId = messages.length;
  const LastMessage = useRef<HTMLLIElement | null>(null);
  const ChatContainer = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (LastMessage.current) {
      LastMessage.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (LastMessage.current) {
      LastMessage.current.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <section
      className="overflow-y-auto h-full max-h-full"
      style={{ scrollbarWidth: "none" }}
    >
      <ul ref={ChatContainer} className="grid gap-y-[0.5vh] max-h-0">
        {messages.map((message) => (
          <li
            ref={message.id === lastMessageId ? LastMessage : null}
            key={message.id}
            className={`py-[0.5vh] px-[0.5vw] rounded-md max-w-[50%] ${
              message.content === "Thinking" ? "bg-primary" : ""
            } ${
              message.sender === "ai"
                ? "justify-self-start bg-blue-200"
                : "justify-self-end bg-primary-500 bg-green-200"
            }`}
          >
            {message.content === "Thinking" ? (
              <div className="thinking-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <ul className="grid gap-y-2">
                {message.content
                  .split("**")
                  .join("")
                  .split("*")
                  .map((sentence, index) => (
                    <li key={index} className="indent-4">
                      {sentence}
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ChatScreenClient;
