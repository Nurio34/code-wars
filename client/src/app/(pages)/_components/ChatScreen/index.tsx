"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import ChatScreenClient from "./Client";

function ChatScreen({ page }: { page: string }) {
  return (
    <Provider store={store}>
      <ChatScreenClient page={page} />
    </Provider>
  );
}
export default ChatScreen;
