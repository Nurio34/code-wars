"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import MessageAreaClient from "./Client";

function MessageArea({ page }: { page: string }) {
  return (
    <Provider store={store}>
      <MessageAreaClient page={page} />
    </Provider>
  );
}
export default MessageArea;
