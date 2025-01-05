import { MessageType } from "@/store/slices/chat";

function Message({ message }: { message: MessageType }) {
  return (
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
  );
}
export default Message;
