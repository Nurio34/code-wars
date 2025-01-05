import { useAppSelector } from "@/store/hooks";
import { useEffect, useRef } from "react";
import Thinking from "./Thinking";
import Message from "./Message";

const ChatScreenClient = () => {
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
      <ul ref={ChatContainer} className="grid gap-y-[1vh] max-h-0">
        {messages.map((message) => (
          <li
            ref={message.id === lastMessageId ? LastMessage : null}
            key={message.id}
            className={`py-[0.5vh] px-[0.5vw] rounded-md max-w-[75%] ${
              message.content === "Thinking" ? "bg-primary" : ""
            } ${
              message.sender === "model"
                ? "justify-self-start bg-blue-200"
                : "justify-self-end bg-primary-500 bg-green-200"
            }`}
          >
            {message.content === "Thinking" ? (
              <Thinking />
            ) : (
              <Message message={message} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ChatScreenClient;
