import ChatScreen from "../_components/ChatScreen";
import MessageArea from "../_components/MessageArea";

export default function DiscussImage() {
  return (
    <div
      className="col-start-2 row-start-2 py-[1vh] px-[10vw]
        grid grid-rows-[1fr,auto] gap-y-[1vh]"
    >
      <ChatScreen page="discuss-image" />
      <MessageArea page="discuss-image" />
    </div>
  );
}
