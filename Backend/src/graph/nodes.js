import "dotenv/config";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
  HumanMessage,
  SystemMessage
} from "@langchain/core/messages";

import portfolioData from "../Data.js";
import { detectNavigation } from "./navigation.js";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.3,
  apiKey: process.env.GOOGLE_API_KEY
});

export async function chatbotNode(state) {
  const userMessage =
    state.messages[state.messages.length - 1]?.content || "";

  const systemPrompt = `
You are Shubham Gupta's personal portfolio AI assistant.

You are talking to recruiters who want to learn about Shubham.

You can answer questions about:

- Shubham's profile
- Education
- Skills
- Projects
- Certifications
- Achievements

IMPORTANT RULES:

1. Only use information from the portfolio data.
2. Never make up information.
3. Never claim Shubham has experience that is not present in the data.
4. Keep your answers professional.
5. Keep answers concise and useful for recruiters.
6. If the user asks about projects, certifications or achievements,
   provide the relevant information.
7. If appropriate, the frontend can provide a button to navigate
   to the relevant portfolio section.

Portfolio Data:

${JSON.stringify(portfolioData, null, 2)}

Recruiter's Question:

${userMessage}
`;

  const response = await model.invoke([
    new SystemMessage(systemPrompt),
    new HumanMessage(userMessage)
  ]);

  const navigation = detectNavigation(userMessage);

  return {
    response: response.content,
    navigation
  };
}