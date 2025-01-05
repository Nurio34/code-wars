import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MessageType {
  id: number;
  content: string;
  sender: "user" | "model";
  timestamp: string;
}

interface ChatState {
  messages: MessageType[];
}

const initialState: ChatState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<MessageType>) => {
      state.messages.push(action.payload);
    },
    updateThinkingWithMessage: (state, action: PayloadAction<MessageType>) => {
      state.messages[state.messages.length - 1] = action.payload;
    },
  },
});

export const { addMessage, updateThinkingWithMessage } = chatSlice.actions;

export default chatSlice.reducer;
