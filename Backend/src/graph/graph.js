import {
  StateGraph,
  START,
  END
} from "@langchain/langgraph";

import { ChatState } from "./state.js";
import { chatbotNode } from "./nodes.js";

const workflow = new StateGraph(ChatState)

  .addNode("chatbot", chatbotNode)

  .addEdge(START, "chatbot")

  .addEdge("chatbot", END);

export const chatbotGraph = workflow.compile();