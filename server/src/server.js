//! *** DATA STRUCTURES ***
import { LinkedList } from "./DSA/data-structures/3-likedList/1-linkedList.js";
import { LinkedListWithTail } from "./DSA/data-structures/3-likedList/2-linkedListWithTail.js";
import { LinkedListDoublePointer } from "./DSA/data-structures/3-likedList/3-likedListDoublePointry.js";
import { HashTable } from "./DSA/data-structures/4-hashTable/index.js";
//! *** GEMINI ***
//! *** APP ***
import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import geminiRoutes from "./routes/gemini.js";

app.use(express.json());
app.use(cookieParser());

app.use("/api/gemini", geminiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
