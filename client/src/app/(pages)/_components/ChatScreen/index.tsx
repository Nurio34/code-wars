"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import ChatScreenClient from "./Client";

function ChatScreen() {
  return (
    <Provider store={store}>
      <ChatScreenClient />
    </Provider>
  );
}
export default ChatScreen;
