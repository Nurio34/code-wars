import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

// Define a type for the slice state
interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: string;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [
    {
      id: 1,
      content: "Hello, how are you?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      content: "I'm fine, thank you!",
      sender: "ai",
      timestamp: new Date().toISOString(),
    },
  ],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    //  increment: (state) => {
    //   state.value += 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    updateThinkingWithMessage: (state, action: PayloadAction<Message>) => {
      state.messages[state.messages.length - 1] = action.payload;
    },
  },
});

export const { addMessage, updateThinkingWithMessage } = chatSlice.actions;

export default chatSlice.reducer;
