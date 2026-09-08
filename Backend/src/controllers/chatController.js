import { HumanMessage } from "@langchain/core/messages";
import { chatbotGraph } from "../graph/graph.js";

export async function chatController(req, res) {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required"
      });
    }

    const result = await chatbotGraph.invoke({
      messages: [
        new HumanMessage(message)
      ]
    });

    res.json({
      success: true,
      message: result.response,
      navigation: result.navigation
    });

  } catch (error) {
    console.error("Chatbot Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong."
    });
  }
}