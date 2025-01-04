import ChatScreen from "../_components/ChatScreen";
import MessageArea from "../_components/MessageArea";

export default function Chat() {
  return (
    <main
      className="col-start-2 row-start-2 py-[1vh] px-[10vw]
      grid grid-rows-[1fr,auto] gap-y-[1vh]"
    >
      <ChatScreen page="chat" />
      <MessageArea page="chat" />
    </main>
  );
}
